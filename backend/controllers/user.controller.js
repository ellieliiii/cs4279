const { getAllUsersService, getUserByIdService, addUserService, updateUserByIdService, deleteUserByIdService } = require(process.cwd() + "/services/user.services");

const getUsers = async (req, res) => {
    // implement here
}

const getUser = async (req, res) => {
    // implement here 
}

const createUser = async (req, res) => {
    // implement here 
}

const getLoggedInUser = async (req, res) => {
    // implement here 
}

const updateUser = async (req, res) => {
    // implement here 
}

const deleteUser = async (req, res) => {
    // implement here
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    getLoggedInUser,
    updateUser,
    deleteUser
};