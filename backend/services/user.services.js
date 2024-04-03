const mdb = require("../services/mdb.services");
console.log("hey");
/**
 * Add a new user to the Users collection in MongoDB
 * @async
 * @param {Object} body - The body of the request that contains user information
 * @param {Object} params - The parameters of the request that contains user information
 * @param {String} body.email - The email of the user
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is the created user item if OK
 */
exports.addUserService = async (params, body) => {
    try {
        const user = await mdb.users.findOne({ email: body.email });
        if (user) {
            console.log("addUserService Error: User already exists");
            return { status: "ERROR", data: "User already exists" };
        }

        const result = await mdb.users.insertOne({
            _id: false, 
            ...body
        });

        console.log("addUserService Success:", result);
        return { status: "OK", data: body };
    } catch (error) {
        console.log("addUserService Error:", error);
        return { status: "ERROR", data: error };
    }
}

/**
 * Get a user from the Users table in database based on the provided user ID
 * @async
 * @param {Object} body - The body of the request that contains user information
 * @param {Object} params - The parameters of the request that contains user information 
 * @param {String} params.userId - An UUID that uniquely identifies a user
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is the queried user item if OK
 */
exports.getUserByIdService = async (params, body) => {
    try {
        const user = await mdb.users.findOne({ userId: params.userId });
        if (!user) {
            console.log("getUserByIdService Error: User not found");
            return { status: "ERROR", data: "User not found" };
        }
        console.log("getUserByIdService Success:", user);
        return { status: "OK", data: user };
    } catch (error) {
        console.log("getUserByIdService Error:", error);
        return { status: "ERROR", data: error };
    }
}

/**
 * Get ALL user from the Users table in database, called by admins
 * @async
 * @param {Object} body - The body of the request that contains user information
 * @param {Object} params - The parameters of the request that contains user information 
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is all user items if OK
 */
exports.getAllUsersService = async (params, body) => {
    try {
        const users = await mdb.users.find({}).toArray();
        console.log("getAllUsersService Success:", users);
        return { status: "OK", data: users };
    } catch (error) {
        console.log("getAllUsersService Error:", error);
        return { status: "ERROR", data: error };
    }
}

/**
 * Update a user from the Users table in database based on the provided user ID
 * If want to update only a selected number of fields, then obtain the unupdated user item first
 * @async
 * @param {Object} body - The body of the request that contains user information
 * @param {Object} params - The parameters of the request that contains user information 
 * @param {String} params.userId - An UUID that uniquely identifies a user
 * @param {String} body.name - The name of the user
 * @param {String} body.email - The email of the user
 * @param {String} body.phoneNumber - The phone number of the user
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is the updated user item if OK
 */
exports.updateUserByIdService = async(params, body) => {
    let user = {}; 
    console.log("updateUserByIdService - calling getUserByIdService");
    try {
        user = await exports.getUserByIdService(params, body);
    } catch (error) {
        console.log("updateUserByIdService Error:", error);
        return { status: "ERROR", data: error };
    }
    console.log("updateUserByIdService", user)
    if (user.status != "OK"){
        return {status: "ERROR", data: user.data};
    }
    if (!user.data){
        return {status: "ERROR", data: "user does not exist"};
    }

    let query = {
        'userId': params.userId,
        'name': body.name || user.data.name,
        'email': body.email || user.data.email,
        'phoneNumber': body.phoneNumber || user.data.phoneNumber,
        'membershipIds': body.membershipIds || user.data.membershipIds,
        'roommates': body.roommates || user.data.roommates,
        'sessionIds': body.sessionIds || user.data.sessionIds,
        'settings': body.settings || user.data.settings
    }
    
    try {
        const result = await mdb.users.updateOne({ userId: user.userId }, { $set: query });
        console.log("updateUserByIdService Success:", result);
        return { status: "OK", data: query };
    } catch (error) {
        console.log("updateUserByIdService Error:", error);
        return { status: "ERROR", data: error };
    }
}

/**
 * Delete a user from the Users table in database based on the provided user ID, called by admins
 * @async
 * @param {Object} body - The body of the request that contains user information
 * @param {Object} params - The parameters of the request that contains user information 
 * @param {String} params.userId - An UUID that uniquely identifies a user
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is the deleted user item if OK
 */
exports.deleteUserByIdService = async(params, body) => {
    try {
        const user = await mdb.users.findOne({ userId : params.userId });
        if (!user) {
            console.log("deleteUserByIdService Error: User not found");
            return { status: "ERROR", data: "User not found" };
        }
        const result = await mdb.users.deleteOne({ userId : params.userId });
        console.log("deleteUserByIdService Success:", result);
        return { status: "OK", data: user };
    } catch (error) {
        console.log("deleteUserByIdService Error:", error);
        return { status: "ERROR", data: error };
    }
}

/*********************************
 ************ TESTING ************
 *********************************/
 setTimeout(function() { // first set of tests to run (user, org, roommate)
    console.log("I am user testing, I am running");
  }, 5000);