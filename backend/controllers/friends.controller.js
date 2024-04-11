const {
    addFriendsFormService,
    getAllFriendsFormsService,
  } = require("../services/friends.services");
  
  const addFriendsForm = async (req, res) => {
    try {
      const result = await addFriendsFormService(req.params, req.body);
      if (result.status == "OK") {
        /// send report that object is created
        res.status(201).send(result.data);
      } else {
        res.status(409).send(result.data);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error });
    }
  };
  
  const getAllFriendsForms = async (req, res) => {
    try {
      const result = await getAllFriendsFormsService(req.params, req.body);
      if (result.status == "OK") {
        /// send report that object is created
        res.status(201).send(result.data);
      } else {
        res.status(409).send(result.data);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error });
    }
  };
  
  module.exports = {
    addFriendsForm,
    getAllFriendsForms,
  };
  