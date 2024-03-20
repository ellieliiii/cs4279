const mdb = require("../services/mdb.services");
const { randomUUID } = require('crypto');

/**
 * Add a new user to the Users collection in MongoDB
 * @async
 * @param {Object} body - The body of the request that contains user information
 * @param {Object} params - The parameters of the request that contains user information
 * @param {String} body.userId - An UUID that uniquely identifies a user
 * @param {String} body.name - The name of the user
 * @param {String} body.email - The email of the user
 * @param {String} body.displayName - The name of the profile that will be publicly shown on the platform
 * @param {Set} body.sessionIds - A set of sessionIds that are associated with this profile
 * @param {Object} body.settings - An object of user settings associated with this profile
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is the created user item if OK
 */
exports.addUserService = async (params, body) => {
    try {
        // Check if user already exists
        const user = await mdb.users.findOne({ email: body.email });
        if (user) {
            console.log("addUserService Error: User already exists");
            return { status: "ERROR", data: "User already exists" };
        }

        // Generate UUID for user
        // replace later with firebase generated id
        const userId = randomUUID();

        // Insert user into MongoDB
        const result = await mdb.users.insertOne({
            userId: userId,
            ...body
        });

        console.log(result);

        console.log("addUserService Success:", result);
        return { status: "OK", data: body };
    } catch (error) {
        console.log("addUserService Error:", error);
        return { status: "ERROR", data: error.message };
    }
}

// // add documentation here
// exports.getUserByIdService = async (params, body) => {
//     // implement getUserById service here
// }

// // add documentation here
// exports.getAllUsersService = async (params, body) => {
//     // implement getAllUsers service here
// }

// // add documentation here
// exports.updateUserByIdService = async(params, body) => {
//     // implement update service here 
// }

// exports.deleteUserByIdService = async(params, body) => {
//     // implement delete service here
// }