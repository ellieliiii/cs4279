const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const RootRouter = require('./routers/root.router');

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

app.use('/api', RootRouter)

module.exports = app;