const express = require('express');
const userRouter = require('./user.router');
const orgRouter = require('./org.router');
const actRouter = require('./activities.router');
const roommateRouter = require("./friends.router");
const friendsRouter = require("./friends.router");

const RootRouter = express.Router();

RootRouter.get("/", (req, res) => {
  res.send("Student Match Backend CICD update");
});

//  add more routes here
RootRouter.use('/user', userRouter);
RootRouter.use('/org', orgRouter);
RootRouter.use('/act', actRouter);
RootRouter.use("/roommate", roommateRouter);
RootRouter.use("/friends", friendsRouter);

module.exports = RootRouter;
