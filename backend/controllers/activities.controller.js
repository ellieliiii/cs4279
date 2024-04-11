const { getAllActsService, getActByIdService, addActService, updateActService } = require("../services/activities.services");

const getAllActs = async (req, res) => {
    try {
        const acts = await getAllActsService(req.parms, req.body);
        if (acts.status == "OK") {
            res.status(200).send(acts.data);
        } else {
            res.status(404).send(acts.data)
        }
    } catch (error) {
        res.status(500).send({ message: error });
    }
}

const getActById = async (req, res) => {
    try {
        const act = await getActByIdService(req.params, req.body);
        if (act.status == "OK") {
            res.status(200).send(act.data);
        } else {
            res.status(404).send(act.data)
        }
    } catch (error) {
        res.status(500).send({ message: error });
    }
}

const createAct = async (req, res) => {
    try {
        const result = await addActService(req.params, req.body);
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

const updateAct = async (req, res) => {
    try {
        console.log("in update")
        const result = await updateActService(req.params, req.body);
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
    getAllActs,
    getActById,
    createAct,
    updateAct
};