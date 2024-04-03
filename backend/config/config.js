// var admin = require("firebase-admin");
require("dotenv").config();
const {uri} = require("../config.js")
console.log(uri);
console.log(process.env.MONGODB_URI);

// put firebase admin sdk json file here
// var serviceAccount = require("");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

module.exports = {
    port: process.env.PORT || 3000,
    // Replace with correct mongodb uri
    mongoURI: process.env.MONGODB_URI,
    // admin: admin
};