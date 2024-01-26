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
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// BODY

const db = client.db("match");
const users = db.collection('users');
const meUser = {
    username: "Me",
    password: "password",
}
const result = users.insertOne(meUser);

await client.close();

console.log("hello world")