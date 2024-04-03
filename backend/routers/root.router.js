const express = require('express');
const userRouter = require('./user.router');
const orgRouter = require('./org.router');

const RootRouter = express.Router();

RootRouter.get('/', (req, res) => {
    res.send('Student Match Backend CICD update');
});

// add more routes here
RootRouter.use('/user', userRouter);
RootRouter.use('/org', orgRouter);

module.exports = RootRouter