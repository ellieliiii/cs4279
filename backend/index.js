/* THINGS TO NPM INSTALL
npm install mongodb@6.3
npm install mongodb --save
*/

import { uri } from './config.js';

// MONGODB SETUP
import { MongoClient, ServerApiVersion } from 'mongodb';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Database and collections being connected
const db = client.db("match");
const users = db.collection('users');

async function connect() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    await run().catch(console.dir);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log("Connection closed")
  }
}
await connect().catch(console.dir);

// do stuff when you run the file, this probably won't be used in the actual website much, rather just used for basic testing
async function run() {
  const meUser = {
    username: "Me",
    email: "me@me.me",
    password: "password",
  }
  await addUser(meUser);
}

// FUNCTIONS

async function addUser(user) {
  const email = {email: user.email};
  if (await users.findOne(email) == null) {
    await users.insertOne(user);
    console.log("addUser: ${email} added successfully");
  }
  else console.log("addUser: ${email} already exists");
}

console.log("hello world")