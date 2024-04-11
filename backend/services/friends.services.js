const mdb = require("../services/mdb.services");

/**
 * Create a new friends form
 * @async
 * @param {Object} body - The body of the request that contains org information
 * @param {String} body.name - Name of user
 * @param {String} body.email - Email of user
 * @param {String} body.socialness - Level of introvert/extrovert-ness of user
 * @param {String} body.socialDesire - Preference of pairing with introvert or extrovert
 * @param {Array} body.hobbies - Hobbies of user
 * @param {Array} body.music - Preference of music
 * @param {Array} body.year - Academic standing of user
 * @param {Array} body.communication - Preference of communication
 * @param {String} body.userId - A UUID that identifies the user that created the org
 * @return {Object} - An object of {status: status, data: data}, where status can be "OK" or "ERROR" and data is the created org item if OK
 */
exports.addFriendsFormService = async (params, body) => {
  try {
    // Check if user has already submitted a form
    // const user = await mdb.friends.findOne({ email: body.vanderbiltEmail });
    // if (user) {
    //   console.log("addFriendsFormService Error: User already submitted a friends form");
    //   return { status: "ERROR", data: "User already submitted a friends form" };
    // }

    // Insert friends form into MongoDB
    const result = await mdb.friends.insertOne({
      ...body,
    });

    console.log("addFriendsFormService Success:", result);
    return { status: "OK", data: body };
  } catch (error) {
    console.log("addFriendsFormService Error:", error);
    return { status: "ERROR", data: error.message };
  }
};

exports.getAllFriendsFormsService = async (params, body) => {
  try {
    const forms = await mdb.friends.find({}).toArray();
    console.log("getAllFriendsForms Success:", forms);
    return { status: "OK", data: forms };
  } catch (error) {
    console.log("getAllFriendsForms Error:", error);
    return { status: "ERROR", data: error };
  }
};

/*********************************
 ************ TESTING ************
 *********************************/
setTimeout(function() { // fifth set of tests to run (user, org, roommate, acts, friends)
  console.log("I am friends testing, I am running");
  let friendsForm = {
    'name': "Afriend",
    'email': "friend@vanderbilt.edu",
    'socialness': "100",
    'socialDesire': "83",
    'hobbies': ["Gaming", "Watching Movies"],
    'music': ["Pop", "Classical", "Country"],
    'year': ["Senior"],
    'communication': ["Text", "Instagram"]
  }
  //let friend = exports.addFriendsFormService({}, friendsForm); console.log("Add friends form: ", friend);
  //console.log("ALL friends: ", exports.getAllFriendsFormsService());
}, 12500);
