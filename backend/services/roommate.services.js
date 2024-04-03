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

/*********************************
 ************ TESTING ************
 *********************************/
 setTimeout(function() {
  mdb.roomies.insertOne({});
  console.log("I am running");
}, 5000);