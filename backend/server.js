import express from 'express';
import * as f from './index.js';
const app = express();
const port = 3005; // Choose a port for your server

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes and middleware here

// Assume you have a function called me in your index.js file

app.post('/api/me', async (req, res) => {
  const formData = req.body;

  try {
    const meMe = await f.me(formData);
    res.json(meMe);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

console.log("hey")
// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

app.on('error', error => {
    console.error('Error starting the server:', error);
});