"use client";
import React from "react";
import Link from "../../../node_modules/next/link";
import pairFriends from "../utils/friendAlgorithm";

function FriendHome() {
  // Temporary button for testing algorithm
  const handleButtonClick = () => {
    const friends = [
      {
        fullName: "user1",
        email: "user1@vanderbilt.edu",
        personalityType: 50,
        matchPersonalityType: 50,
        hobbies: ["Reading", "Yoga", "Cycling", "Music"],
        favoriteMusicGenres: ["Rock", "Blues"],
        academicStanding: ["Sophomore"],
        communicationPreference: ["Text", "Instagram"],
        matches: null,
      },
      {
        fullName: "user2",
        email: "user2@vanderbilt.edu",
        personalityType: 75,
        matchPersonalityType: 25,
        hobbies: ["Gaming", "Yoga", "Cycling", "Board Games", "Cooking"],
        favoriteMusicGenres: ["Pop", "Blues", "Jazz"],
        academicStanding: ["Freshman"],
        communicationPreference: ["Text", "Instagram", "In Person"],
        matches: null,
      },
      {
        fullName: "user3",
        email: "user3@vanderbilt.edu",
        personalityType: 34,
        matchPersonalityType: 46,
        hobbies: [
          "Board Games",
          "Photography",
          "Gardening",
          "Music",
          "Fishing",
        ],
        favoriteMusicGenres: ["Classical", "Pop"],
        academicStanding: ["Sophomore"],
        communicationPreference: ["GroupMe", "Instagram"],
        matches: null,
      },
      {
        fullName: "user4",
        email: "user4@vanderbilt.edu",
        personalityType: 80,
        matchPersonalityType: 68,
        hobbies: ["Drawing", "Yoga", "Reading", "Fishing"],
        favoriteMusicGenres: ["Jazz", "Country", "Pop"],
        academicStanding: ["Senior"],
        communicationPreference: [
          "Text",
          "WeChat",
          "Instagram",
          "Email",
          "In Person",
        ],
        matches: null,
      },
      {
        fullName: "user5",
        email: "user5@vanderbilt.edu",
        personalityType: 23,
        matchPersonalityType: 50,
        hobbies: ["Reading", "Gardening", "Cooking"],
        favoriteMusicGenres: ["Pop", "Rap", "Electronic"],
        academicStanding: ["Junior"],
        communicationPreference: ["Call", "Instagram", "In Person"],
        matches: null,
      },
      {
        fullName: "user6",
        email: "user6@vanderbilt.edu",
        personalityType: 50,
        matchPersonalityType: 50,
        hobbies: [
          "Photography",
          "Crafting",
          "Dancing",
          "Surfing",
          "Gaming",
          "Traveling",
        ],
        favoriteMusicGenres: ["Rock", "Classical", "Electronic", "Reggae"],
        academicStanding: ["Senior"],
        communicationPreference: ["Text", "Instagram", "WhatsApp", "Discord"],
        matches: null,
      },
    ];
    pairFriends(friends);
    console.log(friends[0].matches);
    console.log(friends[1].matches);
    console.log(friends[2].matches);
    console.log(friends[3].matches);
    console.log(friends[4].matches);
    console.log(friends[5].matches);
  };

  // Direct navigation using standard anchor tag
  return (
    <div>
      <h1>Find a Friend</h1>
      <Link href="/friendForm">Fill Out Friend Preference Form</Link>
      {/* Uncomment button to test matching algorithm*/}
      <br></br>
      <br></br>
      <button className="friend_button" onClick={handleButtonClick}>Find Friends</button>
    </div>
  );
}

export default FriendHome;
