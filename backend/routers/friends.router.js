const express = require("express");
const {
  addFriendsForm,
  getAllFriendsForms,
} = require("../controllers/friends.controller");
const friendsRouter = express.Router();

friendsRouter.get("/", getAllFriendsForms);
friendsRouter.post("/", addFriendsForm);

module.exports = friendsRouter;
