// MONGODB SETUP
import { MongoClient, ServerApiVersion } from 'mongodb';

const config = require(process.cwd() + '/config/config')

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(config.mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Database and collections being connected
const db = client.db("match");
const users = db.collection("users");

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

// What do I export here?