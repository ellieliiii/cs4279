const express = require('express');
const { getAllOrgs, getOrgByid, createOrg, updateOrg } = require('../controllers/org.controller');
const orgRouter = express.Router();

// CRUD operations for user

// orgRouter.get('/me', getAllGroups);
orgRouter.get('/', getAllOrgs);

orgRouter.get('/id/:orgId', getOrgByid);

// orgRouter.post('/', checkIfAuthenticated, createOrg); // TODO: need owner
orgRouter.post('/', createOrg);

// orgRouter.put('/id/:orgId',checkIfAuthenticated, checkIfAdmin, checkIfMod, updateOrg);
orgRouter.put('/id/:orgId', updateOrg);

// orgRouter.delete('id/:orgId', checkIfAuthenticated, checkIfAdmin,  deleteGroup);

module.exports = orgRouter