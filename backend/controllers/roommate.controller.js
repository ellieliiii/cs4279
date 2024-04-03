const {
  addRoommateFormService,
  getAllRoommateFormsService,
} = require("../services/roommate.services");

const addRoommateForm = async (req, res) => {
  try {
    const result = await addRoommateFormService(req.params, req.body);
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

const getAllRoommateForms = async (req, res) => {
  try {
    const result = await getAllRoommateFormsService(req.params, req.body);
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
  addRoommateForm,
  getAllRoommateForms,
};
