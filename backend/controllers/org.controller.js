const { getAllOrgsService, getOrgByIdService, addOrgService, updateOrgService } = require("../services/org.services");

const getAllOrgs = async (req, res) => {
    try {
        const orgs = await getAllOrgsService(req.parms, req.body);
        if (orgs.status == "OK") {
            res.status(200).send(orgs.data);
        } else {
            res.status(404).send(orgs.data)
        }
    } catch (error) {
        res.status(500).send({ message: error });
    }
}

const getOrgById = async (req, res) => {
    try {
        const org = await getOrgByIdService(req.params, req.body);
        if (org.status == "OK") {
            res.status(200).send(org.data);
        } else {
            res.status(404).send(org.data)
        }
    } catch (error) {
        res.status(500).send({ message: error });
    }
}

const createOrg = async (req, res) => {
    try {
        const result = await addOrgService(req.params, req.body);
        if (result.status == "OK") {
            /// send report that object is created
            res.status(201).send(result.data);
        } else {
            res.status(409).send(result.data)
        }
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

const updateOrg = async (req, res) => {
    try {
        console.log("in update")
        const result = await updateOrgService(req.params, req.body);
        console.log("update done", result)
        if (result.status == "OK") {
            /// send report that object is created
            res.status(201).send(result.data); // i hate this class
        } else {
            res.status(409).send(result.data); // 
        }
    } catch (error) {
        console.log("testerror: ", error)
        res.status(500).send({ message: error })
    }
}

module.exports = {
    getAllOrgs,
    getOrgById,
    createOrg,
    updateOrg
};