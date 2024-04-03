const express = require("express");
const { addRoommateForm } = require("../controllers/roommate.controller");
const roommateRouter = express.Router();

roommateRouter.post("/", addRoommateForm);

module.exports = roommateRouter;
