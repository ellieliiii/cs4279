const express = require('express');
const { getUsers, getUser, createUser, getLoggedInUser, updateUser, deleteUser } = require('../controllers/user.controller');
const userRouter = express.Router();

// CRUD operations for user

userRouter.get('/', getUsers);

userRouter.get('/id/:userId', getUser);

userRouter.post('/', createUser);

// userRouter.get("/me", checkIfAuthenticated ,getLoggedInUser)
userRouter.get("/me", getLoggedInUser);

// userRouter.put("/id/:userId", checkIfAuthenticated, checkIfAdmin, verifyUserMatchParams, updateUser); 
userRouter.put("/id/:userId", updateUser);

// userRouter.delete("/id/:userId", checkIfAuthenticated, checkIfAdmin ,verifyUserMatchParams, deleteUser);
userRouter.delete("/id/:userId", deleteUser);

module.exports = userRouter