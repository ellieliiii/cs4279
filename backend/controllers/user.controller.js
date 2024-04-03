const { getAllUsersService, getUserByIdService, addUserService, updateUserByIdService, deleteUserByIdService } = require("../services/user.services");

const getUsers = async (req, res) => {
    try {
        const users = await getAllUsersService(req.params, req.body);
        if (users.status == "OK") {
            res.status(200).send(users.data);
        } else {
            res.status(404).send(users.data)
        }
    } catch (error) {
        res.status(500).send({ message: error });
    }
}

const getUser = async (req, res) => {
    try {
        const result = await getUserByIdService(req.params, req.body);
        if (result.status == "OK") {
            res.status(200).send(result.data);
        } else {
            res.status(404).send(result.data)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error })
    }
}

const createUser = async (req, res) => {
    try {
        const result = await addUserService(req.params, req.body);
        if (result.status == "OK") {
            /// send report that object is created
            res.status(201).send(result.data);
        } else {
            res.status(409).send(result.data)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error })
    }
}

const getLoggedInUser = async (req, res) => {
    try {
        req.params.userId = req.body.userId;
        const user = await getUserByIdService(req.params, req.body);
        if (user.status == "OK") {
            res.status(200).send(user.data);
        } else {
            res.status(404).send(user.data)
        }
    } catch (error) {
        res.status(500).send({ message: error });
    }
}

const updateUser = async (req, res) => {
    try {
        const result = await updateUserByIdService(req.params, req.body);
        if (result.status == "OK") {
            /// send report that object is created
            res.status(201).send(result.data);
        } else {
            res.status(409).send(result.data)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error })
    }
}

const deleteUser = async (req, res) => {
    try {
        const result = await deleteUserByIdService(req.params, req.body);
        if (result.status == "OK") {
            /// send report that object is created
            res.status(201).send(result.data);
        } else {
            res.status(409).send(result.data)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error })
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    getLoggedInUser,
    updateUser,
    deleteUser
};