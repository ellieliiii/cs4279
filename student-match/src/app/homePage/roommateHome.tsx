"use client";
import React from "react";
import Link from "../../../node_modules/next/link";
import pairRoommates from "../utils/roommateAlgorithm";

function RoommateHome() {
  // Temporary button for testing algorithm
  const handleButtonClick = () => {
    const roommates = [
      {
        fullName: "user1",
        vanderbiltEmail: "user1@vanderbilt.edu",
        vunetId: "user1",
        pets: "yes",
        sleepSchedulePreferences: "earlyBird",
        cleanliness: 50,
        overnightGuestsFrequency: 50,
        studyNoisePreference: 50,
        studyLocationPreference: 50,
        friendsOverFrequency: 50,
        smoke: "No",
        comfortableWithSmokers: "No",
        alcoholComfortLevel: 50,
        conflictResolution: "Discuss calmly",
        locationPreference: "Zeppos",
        matches: null,
      },
      {
        fullName: "user2",
        vanderbiltEmail: "user2@vanderbilt.edu",
        vunetId: "user2",
        pets: "no",
        sleepSchedulePreferences: "earlyBird",
        cleanliness: 25,
        overnightGuestsFrequency: 75,
        studyNoisePreference: 50,
        studyLocationPreference: 25,
        friendsOverFrequency: 64,
        smoke: "No",
        comfortableWithSmokers: "No",
        alcoholComfortLevel: 50,
        conflictResolution: "Discuss calmly",
        locationPreference: "Zeppos",
        matches: null,
      },
      {
        fullName: "user3",
        vanderbiltEmail: "user3@vanderbilt.edu",
        vunetId: "user3",
        pets: "yes",
        sleepSchedulePreferences: "nightOwl",
        cleanliness: 85,
        overnightGuestsFrequency: 10,
        studyNoisePreference: 90,
        studyLocationPreference: 30,
        friendsOverFrequency: 78,
        smoke: "Yes",
        comfortableWithSmokers: "Yes",
        alcoholComfortLevel: 70,
        conflictResolution: "Seek mediation",
        locationPreference: "Morgan",
        matches: null,
      },
      {
        fullName: "user4",
        vanderbiltEmail: "user4@vanderbilt.edu",
        vunetId: "user4",
        pets: "no",
        sleepSchedulePreferences: "nightOwl",
        cleanliness: 66,
        overnightGuestsFrequency: 35,
        studyNoisePreference: 30,
        studyLocationPreference: 44,
        friendsOverFrequency: 32,
        smoke: "Yes",
        comfortableWithSmokers: "Yes",
        alcoholComfortLevel: 40,
        conflictResolution: "Address immediately",
        locationPreference: "Cole",
        matches: null,
      },
      {
        fullName: "user5",
        vanderbiltEmail: "user5@vanderbilt.edu",
        vunetId: "user5",
        pets: "no",
        sleepSchedulePreferences: "earlyBird",
        cleanliness: 10,
        overnightGuestsFrequency: 23,
        studyNoisePreference: 56,
        studyLocationPreference: 30,
        friendsOverFrequency: 78,
        smoke: "No",
        comfortableWithSmokers: "Yes",
        alcoholComfortLevel: 39,
        conflictResolution: "Address immediately",
        locationPreference: "Village",
        matches: null,
      },
      {
        fullName: "user6",
        vanderbiltEmail: "user6@vanderbilt.edu",
        vunetId: "user6",
        pets: "yes",
        sleepSchedulePreferences: "earlyBird",
        cleanliness: 49,
        overnightGuestsFrequency: 80,
        studyNoisePreference: 40,
        studyLocationPreference: 90,
        friendsOverFrequency: 20,
        smoke: "No",
        comfortableWithSmokers: "Yes",
        alcoholComfortLevel: 60,
        conflictResolution: "Seek mediation",
        locationPreference: "EBI",
        matches: null,
      },
      {
        fullName: "user7",
        vanderbiltEmail: "user7@vanderbilt.edu",
        vunetId: "user7",
        pets: "yes",
        sleepSchedulePreferences: "earlyBird",
        cleanliness: 50,
        overnightGuestsFrequency: 80,
        studyNoisePreference: 37,
        studyLocationPreference: 88,
        friendsOverFrequency: 23,
        smoke: "No",
        comfortableWithSmokers: "Yes",
        alcoholComfortLevel: 60,
        conflictResolution: "Seek mediation",
        locationPreference: "EBI",
        matches: null,
      },
    ];
    pairRoommates(roommates);
    console.log(roommates[0].matches);
    console.log(roommates[1].matches);
    console.log(roommates[2].matches);
    console.log(roommates[3].matches);
    console.log(roommates[4].matches);
    console.log(roommates[5].matches);
    console.log(roommates[6].matches);
  };

  // Direct navigation using standard anchor tag
  return (
    <div>
      <h1>Find a Roommate</h1>
      <Link href="/roommateForm">Fill Out Roommate Preference Form</Link>
      {/* Uncomment button to test matching algorithm*/}
      {/* <button onClick={handleButtonClick}>Find Matches</button> */}
    </div>
  );
}

export default RoommateHome;
