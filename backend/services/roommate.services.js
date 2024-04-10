const mdb = require("../services/mdb.services");

exports.addRoommateFormService = async (params, body) => {
  try {
    // Check if user has already submitted a form
    // const user = await mdb.roomies.findOne({ email: body.vanderbiltEmail });
    // if (user) {
    //   console.log("addRoommateFormService Error: User already submitted a roommate form");
    //   return { status: "ERROR", data: "User already submitted a roommate form" };
    // }

    // Insert roommate form into MongoDB
    const result = await mdb.roomies.insertOne({
      ...body,
    });

    console.log("addRoommateFormService Success:", result);
    return { status: "OK", data: body };
  } catch (error) {
    console.log("addRoommateFormService Error:", error);
    return { status: "ERROR", data: error.message };
  }
};

exports.getAllRoommateFormsService = async (params, body) => {
  try {
    const forms = await mdb.roomies.find({}).toArray();
    console.log("getAllRoommateForms Success:", forms);
    return { status: "OK", data: forms };
  } catch (error) {
    console.log("getAllRoommateForms Error:", error);
    return { status: "ERROR", data: error };
  }
};

/*********************************
 ************ TESTING ************
 *********************************/
/* RECOPIED FUNCTIONS */
addRoommateFormService = async (params, body) => {
  try {
    // Check if user has already submitted a form
    // const user = await mdb.roomies.findOne({ email: body.vanderbiltEmail });
    // if (user) {
    //   console.log("addRoommateFormService Error: User already submitted a roommate form");
    //   return { status: "ERROR", data: "User already submitted a roommate form" };
    // }

    // Insert roommate form into MongoDB
    const result = await mdb.roomies.insertOne({
      ...body,
    });

    console.log("addRoommateFormService Success:", result);
    return { status: "OK", data: body };
  } catch (error) {
    console.log("addRoommateFormService Error:", error);
    return { status: "ERROR", data: error.message };
  }
};
getAllRoommateFormsService = async (params, body) => {
  try {
    const forms = await mdb.roomies.find({}).toArray();
    console.log("getAllRoommateForms Success:", forms);
    return { status: "OK", data: forms };
  } catch (error) {
    console.log("getAllRoommateForms Error:", error);
    return { status: "ERROR", data: error };
  }
};

/* TESTING */
setTimeout(function() { // third set of tests to run (user, org, roommate)
  console.log("I am roommate testing, I am running");
  let roomForm = {
    'fullName': "Nnaammee",
    'vanderbiltEmail': "me@vanderbilt.edu",
    'vunetId': "nameME",
    'pets': "Yes",
    'sleepSchedulePreferences': 'earlyBird',
    'cleanliness': "20",
    'overnightGuestsFrequency': "10",
    'studyNoisePreference': '100',
    'studyLocationPreference': "100",
    'friendsOverFrequency': "80",
    'smoke': "No",
    'comfortableWithSmokers': "No",
    'alcoholComfortLevel': '90',
    'conflictResolution': "Need time to cool off",
    'locationPreference': "McTyeire"
  }
  //let room = addRoommateFormService({}, roomForm); console.log("Add roommate form: ", room);
  //console.log("ALL roommates: ", getAllRoommateFormsService());
}, 15000);
