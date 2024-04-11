const mdb = require("../services/mdb.services");

/**
 * Create a new roommate form
 * @async
 * @param {Object} body - The body of the request that contains org information
 * @param {String} body.fullName - The name of user
 * @param {String} body.vanderbiltEmail - Email of user
 * @param {String} body.vunetId - VUNet ID
 * @param {String} body.pets - Whether user owns pets
 * @param {String} body.sleepSchedulePreferences - Preferences of sleep schedule
 * @param {String} body.cleanliness - Level of cleanliness
 * @param {String} body.overnightGuestsFrequency - Frequency of overnight guests
 * @param {String} body.studyNoisePreference - Preference of study noise
 * @param {String} body.studyLocationPreference - Preference of study location
 * @param {String} body.friendsOverFrequency - Frequency user has friends over
 * @param {String} body.smoke - Whether user smokes
 * @param {String} body.comfortableWithSmokers - Comfort level with smokers
 * @param {String} body.alcoholComfortLevel - Comfort level of alcohol
 * @param {String} body.conflictResolution - Preferred method of conflict resolution
 * @param {String} body.locationPreference - Residential location of preference
 * @param {String} body.userId - A UUID that identifies the user that created the org
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is the created org item if OK
 */
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
setTimeout(function() { // third set of tests to run (user, org, roommate, acts, friends)
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
  //let room = exports.addRoommateFormService({}, roomForm); console.log("Add roommate form: ", room);
  //console.log("ALL roommates: ", exports.getAllRoommateFormsService());
}, 7500);
