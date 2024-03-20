const { getAllUsersService, getUserByIdService, addUserService, updateUserByIdService, deleteUserByIdService } = require("../services/user.services");

// const getUsers = async (req, res) => {
//     // implement here
// }

// const getUser = async (req, res) => {
//     // implement here 
// }

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

// const getLoggedInUser = async (req, res) => {
//     // implement here 
// }

// const updateUser = async (req, res) => {
//     // implement here 
// }

// const deleteUser = async (req, res) => {
//     // implement here
// }

module.exports = {
    //getUsers,
    //getUser,
    createUser,
    //getLoggedInUser,
    //updateUser,
    //deleteUser
};