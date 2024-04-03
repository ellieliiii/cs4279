const express = require("express");
const {
  addRoommateForm,
  getAllRoommateForms,
} = require("../controllers/roommate.controller");
const roommateRouter = express.Router();

roommateRouter.get("/", getAllRoommateForms);
roommateRouter.post("/", addRoommateForm);

module.exports = roommateRouter;
