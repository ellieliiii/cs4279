const express = require('express');
const { getAllActs, getActById, createAct, updateAct } = require('../controllers/activities.controller');
const actRouter = express.Router();

// CRUD operations for user

// actRouter.get('/me', getAllGroups);
actRouter.get('/', getAllActs);

actRouter.get('/id/:actId', getActById);

// actRouter.post('/', checkIfAuthenticated, createAct); // TODO: need owner
actRouter.post('/', createAct);

// actRouter.put('/id/:actId',checkIfAuthenticated, checkIfAdmin, checkIfMod, updateAct);
actRouter.put('/id/:actId', updateAct);

// actRouter.delete('id/:actId', checkIfAuthenticated, checkIfAdmin,  deleteGroup);

module.exports = actRouter