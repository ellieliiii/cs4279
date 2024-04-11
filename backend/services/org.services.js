const mdb = require("../services/mdb.services");
const { randomUUID } = require('crypto');

/**
 * Create a new org
 * @async
 * @param {Object} body - The body of the request that contains org information
 * @param {String} body.name - The title of the org
 * @param {String} body.description - The description of the org
 * @param {Array} body.tags - An array of tags that are associated with this org
 * @param {Array} body.membershipIds - An array of membershipIds to show users that are in this org
 * @param {String} body.userId - A UUID that identifies the user that created the org
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is the created org item if OK
 */
exports.addOrgService = async (params, body) => {
    const orgId = randomUUID();
    try {
        const org = await mdb.orgs.findOne({ name: body. name });
        if (org) {
            console.log("addUserService Error: Org already exists");
            return { status: "ERROR", data: "Org already exists" };
        }
        const result = await mdb.orgs.insertOne({
            orgId: orgId,
            ...body,
        });        
        await exports.addMemberOrgService({ orgId: orgId }, { membershipId: body.userId });
        console.log("addOrgService Success:", result);
        return { status: "OK", data: body };
    } catch (error) {
        console.log("addOrgService Error:", error);
        return { status: "ERROR", data: error };
    }
}

/**
 * Get an org by orgId
 * @async
 * @param {Object} body - The body of the request that contains org information
 * @param {Object} params - The parameters of the request that contains org information
 * @param {String} params.orgId - An UUID that uniquely identifies a org
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is the queried org item if OK
 */
exports.getOrgByIdService = async (params, body) => {
    try {
        const org = await mdb.orgs.findOne({ orgId: params.orgId });
        if (!org) {
            console.log("getOrgByIdService Error: Org not found")
            return { status: "ERROR", data: "Org not found" };
        }
        console.log("getOrgByIdService Success:", org);
        return { status: "OK", data: org };
    } catch (error) {
        console.log("getOrgByIdService Error:", error);
        return { status: "ERROR", data: error };
    }
}

/**
 * Get all orgs in the database
 * @async
 * @param {Object} body - The body of the request that contains org information
 * @param {Object} params - The parameters of the request that contains org information
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is all org items if OK
 */
exports.getAllOrgsService = async (params, body) => {
    try {
        const orgs = await mdb.orgs.find({}).toArray();
        console.log("getAllOrgsService Success:", orgs);
        return { status: "OK", data: orgs };
    } catch (error) {
        console.log("getAllOrgsService Error:", error);
        return { status: "ERROR", data: error };
    }
}



/**
 * Update an org by orgId
 * @async
 * @param {Object} body - The body of the request that contains org information
 * @param {Object} params - The parameters of the request that contains org information
 * @param {String} params.orgId - An UUID that uniquely identifies a org
 * @param {String} body.name - The title of the org
 * @param {String} body.description - The description of the org
 * @param {Array} body.tags - An array of tags that are associated with this org
 * @param {Array} body.membershipIds - An array of membershipIds to show users that are in this org
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is the updated org item if OK
 */
exports.updateOrgService = async (params, body) => {
    let org = {};
    console.log("updateOrgByIdService - calling getOrgByIdService");
    try {
        org = await exports.getOrgByIdService(params, body);
    } catch (error) {
        console.log("updateOrgByIdService Error", error);
        return { status: "ERROR", data: error };
    }
    console.log("updateOrgByIdService", org);
    if (org.status != "OK") {
        return { status: "ERROR", data: org.data };
    }
    if (!org.data) {
        return { status: "ERROR", data: "org does not exist" };
    }

    let query = {
        'orgId': params.orgId,
        ...body
    }

    try {
        const result = await mdb.orgs.updateOne({ orgId: params.orgId }, { $set: query });
        console.log("updateOrgByIdService Success", result);
        return { status: "OK", data: query };
    } catch (error) {
        console.log("updateOrgByIdService Error", error);
        return { status: "ERROR", data: error };
    }
}



/**
 * Delete a org by orgId
 * @async
 * @param {Object} body - The body of the request that contains org information
 * @param {Object} params - The parameters of the request that contains org information
 * @param {String} params.orgId - An UUID that uniquely identifies a org
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is the deleted org item if OK
 */
exports.deleteOrgService = async (params) => {
    try {
        const org = await mdb.orgs.findOne({ orgId: params.orgId });
        if (!org) {
            console.log("deleteOrgByIdService Error: org not found");
            return { status: "ERROR", data: "org not found" };
        }
        const result = await mdb.orgs.deleteOne({ orgId: params.orgId });
        console.log("deleteOrgByIdService Success:", result);
        return { status: "OK", data: org };
    } catch (error) {
        console.log("deleteOrgByIdService Error:", error);
        return { status: "ERROR", data: error };
    }
}

/**
 * Add a new member to the specified org
 * NOTE: This needs to be run synchronously/atomically with joinOrgProfileService, if fails then have to revert both to ensure integrity
 * @async
 * @param {Object} body - The body of the request that contains org information
 * @param {Object} params - The parameters of the request that contains org information
 * @param {String} params.orgId - An UUID that uniquely identifies a org
 * @param {String} body.membershipId - An UUID that uniquely identifies the membership item
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is the updated org item if OK
 */
exports.addMemberOrgService = async (params, body) => {
    let org = await exports.getOrgByIdService(params, body);
    if (org.status != "OK") {
        return { status: "ERROR", data: org.data }
    }
    if (!org.data) {
        return { status: "ERROR", data: "org does not exist" }
    }
    if (org.data.membershipIds.includes(body.membershipId)) {
        return { status: "ERROR", data: "membership already exists in org" }
    } else {
        org.data.membershipIds.push(body.membershipId);
    }
    let result = await exports.updateOrgService(params, org.data);
    if (result.status != "OK") {
        return { status: "ERROR", data: result.data }
    }
}

/**
 * Remove a membership of the specified org
 * @async
 * @param {Object} body - The body of the request that contains org information
 * @param {Object} params - The parameters of the request that contains org information
 * @param {String} params.orgId - An UUID that uniquely identifies a org
 * @param {String} body.membershipId - An UUID that uniquely identifies the membership item that is to be removed
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is the updated org item if OK
 */
exports.removeMemberOrgService = async (params, body) => {
    let org = await exports.getOrgByIdService(params, body);
    if (org.status != "OK") {
        return { status: "ERROR", data: org.data }
    }
    if (!org.data) {
        return { status: "ERROR", data: "org does not exist" }
    }
    if (org.data.membershipIds.includes(body.membershipId)) {
        org.data.membershipIds = org.data.membershipIds.filter(id => id != body.membershipId);
    } else {
        return { status: "ERROR", data: "membership doesn't exist in org" }
    }
    let result = await exports.updateOrgService(params, org.data);
    if (result.status != "OK") {
        return { status: "ERROR", data: result.data }
    }
}

/*********************************
 ************ TESTING ************
 *********************************/
 setTimeout(function() { // second set of tests to run (user, org, roommate)
    console.log("I am org testing, I am running");
    let body1 = {
        'name': "Geico",
        'email': "martin@geico.com",
        'description': "15 minutes could save you 15% or more on car insurance",
        'tags': ["cars", "insurance"],
        'membershipId': [],
        'orgId': "9801258058"
    }
    let params1 = {
        'orgId': "9801258058"
    }
    let body2 = {
        'name': "Math",
        'email': "math@vanderbilt.edu",
        'description': "1 + 1 = 3",
        'tags': ["addition", "subtraction", "PEMDAS"],
        'membershipId': []
    }
    //console.log(getAllOrgsService());
    //let org = exports.addOrgService({'orgId': "192038"}, body2); console.log("Add org: ", org);
    //let org_no = exports.addOrgService(params1, body1); console.log("Do not add existing org: ", org_no);
    //let findOrg = exports.getOrgByIdService(params1, {}); console.log("Find added org", findOrg);
    //let updateOrg = exports.updateOrgService(params1, body2); console.log("Update org: ", updateOrg);
    //let deleteOrg = exports.deleteOrgService(params1, body2); console.log("Delete org: ", deleteOrg);

  }, 10000);