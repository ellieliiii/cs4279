var admin = require("firebase-admin");

// put firebase admin sdk json file here
var serviceAccount = require("");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = {
    port: process.env.PORT || 3000,
    // Replace with correct mongodb uri
    mongoURI: 'mongodb://localhost:27017/your-database-name',
    admin: admin
};
  