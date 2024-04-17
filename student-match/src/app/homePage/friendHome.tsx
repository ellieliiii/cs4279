"use client";
import React, { useState } from "react";
import Link from "../../../node_modules/next/link";
import pairFriends from "../utils/friendAlgorithm";

function FriendHome() {
  const [matchedFriends, setMatchedFriends] = useState<any[]>([]);

  // Temporary button for testing algorithm
  const handleButtonClick = async () => {
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
    // Commenting out tests with hard coded data for now
    //pairFriends(friends);
    //console.log(friends[0].matches);
    //console.log(friends[1].matches);
    //console.log(friends[2].matches);
    //console.log(friends[3].matches);
    //console.log(friends[4].matches);
    //console.log(friends[5].matches);

    // Gets all friend forms from MongoDB
    const url = "https://3-140-189-217.nip.io/api/friends";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();
      console.log(responseData); // Handle the response data accordingly

      const matches = pairFriends(responseData);
      const currentUser = global?.window?.localStorage?.getItem("user");

      if (currentUser != null) {
        const userEmail = JSON.parse(currentUser).email;
        const userMatches = matches.get(userEmail);
        console.log(userMatches);
        setMatchedFriends(userMatches);
      }
      console.log(currentUser);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Direct navigation using standard anchor tag
  return (
    <div>
      <h1>Find a Friend</h1>
      {/* Remove the "Fill Out Roommate Preference Form" link */}
      {/* <Link href="/friendForm">Fill Out Roommate Preference Form</Link> */}
      <br></br>
      <br></br>
      {/* Update the "Find Matches" button to navigate to the "/friendForm" page */}
      <button
        className="friend_button"
        onClick={() => (window.location.href = "/friendForm")}
      >
        Fill Out Friend Form
      </button>

      <button className="friend_button" onClick={handleButtonClick}>
        Find Friends
      </button>

      {/* Display matched friends */}
      <div>
        <h2>Matched Friends:</h2>
        {matchedFriends.length === 0 && <p>No matches found</p>}
        {matchedFriends.length > 0 && (
          <ul>
            {matchedFriends.map((match, index) => (
              <li key={index}>
                <p>Name: {match.friend.fullName}</p>
                <p>Email: {match.friend.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FriendHome;
