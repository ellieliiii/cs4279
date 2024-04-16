"use client";
import "./friendForm.css"; // Ensure this path matches your updated CSS file name
import React, { useState } from "react";
import styles from "@/app/page.module.css";
import { useRouter } from "next/navigation";

const FriendForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    personalityType: 50, // Introvert-Extrovert Scale
    matchPersonalityType: 50, // Preference for Friend's Personality Type
    hobbies: [], // This will be a multi-select field for hobbies
    favoriteMusicGenres: [], // Multi-select for music genres
    academicStanding: [], // Multi-select for academic standing
    communicationPreference: [], // Multi-select for communication preferences
  });

  const router = useRouter();

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, options } = e.target;
    let value: string[] = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // use setFormData to update the state with the form data given

    // Adds friend form to MongoDB
    const url = "https://3-140-189-217.nip.io/api/friends";
    const data = formData;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData); // Handle the response data accordingly
    } catch (error) {
      console.error("Error:", error);
    }

    router.push("/homePage");
  };

  // Hobbies options for the multi-select
  const hobbiesOptions = [
    "Reading",
    "Gaming",
    "Hiking",
    "Cooking",
    "Traveling",
    "Photography",
    "Sports",
    "Crafting",
    "Music",
    "Blogging",
    "Gardening",
    "Drawing",
    "Dancing",
    "Yoga",
    "Collecting",
    "Fishing",
    "Surfing",
    "Cycling",
    "Watching Movies",
    "Board Games",
  ];

  // Music genres options for the multi-select
  const musicGenresOptions = [
    "Pop",
    "Rock",
    "Jazz",
    "Classical",
    "Electronic",
    "Rap",
    "Country",
    "R&B",
    "Reggae",
    "Blues",
  ];

  // Academic standing options for the multi-select
  const academicStandingOptions = [
    "Freshman",
    "Sophomore",
    "Junior",
    "Senior",
    "Masters",
    "PhD",
  ];

  // Communication preferences options for the multi-select
  const communicationOptions = [
    "Text",
    "Call",
    "Email",
    "In Person",
    "Instagram",
    "Snapchat",
    "WeChat",
    "WhatsApp",
    "GroupMe",
    "Discord",
  ];

  return (
    <body id="friend">
      <div className="friend_div">
        <h1 className="friend_title">Friend Preferences</h1>
        <form onSubmit={handleSubmit} className="friend_form-container">
          {/* Personal Information Section */}
          <div className="friend_form-field-container">
            <label htmlFor="fullName" className="friend_label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className="friend_input"
            />
          </div>

          <div className="friend_form-field-container">
            <label htmlFor="email" className="friend_label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="friend_input"
            />
          </div>

          {/* Personality and Preferences Section */}
          <div className="friend_form-field-container">
            <label className="friend_label">
              Are you an extroverted or introverted person?
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.personalityType}
              onChange={handleChange}
              name="personalityType"
              className="friend_input"
            />
            <div className="friend_range-labels">
              <span>Introvert</span>
              <span>Extrovert</span>
            </div>
          </div>

          <div className="friend_form-field-container">
            <label className="friend_label">
              Would you like to be matched with an extrovert or introvert?
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.matchPersonalityType}
              onChange={handleChange}
              name="matchPersonalityType"
              className="friend_input"
            />
            <div className="friend_range-labels">
              <span>Introvert</span>
              <span>Extrovert</span>
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="friend_form-field-container">
            <label htmlFor="hobbies" className="friend_label">
              What are your hobbies? (Select multiple)
            </label>
            <select
              id="hobbies"
              name="hobbies"
              multiple={true}
              value={formData.hobbies}
              onChange={handleMultiSelectChange}
              className="friend_select"
            >
              {hobbiesOptions.map((hobby) => (
                <option key={hobby} value={hobby}>
                  {hobby}
                </option>
              ))}
            </select>
          </div>

          {/* Favorite Music Genres Section */}
          <div className="friend_form-field-container">
            <label htmlFor="favoriteMusicGenres" className="friend_label">
              Favorite Music Genres (Select multiple)
            </label>
            <select
              id="favoriteMusicGenres"
              name="favoriteMusicGenres"
              multiple={true}
              value={formData.favoriteMusicGenres}
              onChange={handleMultiSelectChange}
              className="friend_select"
            >
              {musicGenresOptions.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* Academic Standing Section */}
          <div className="friend_form-field-container">
            <label htmlFor="academicStanding" className="friend_label">
              Your Academic Standing (Select multiple)
            </label>
            <select
              id="academicStanding"
              name="academicStanding"
              multiple={true}
              value={formData.academicStanding}
              onChange={handleMultiSelectChange}
              className="friend_select"
            >
              {academicStandingOptions.map((standing) => (
                <option key={standing} value={standing}>
                  {standing}
                </option>
              ))}
            </select>
          </div>

          {/* Communication Preferences Section */}
          <div className="friend_form-field-container">
            <label htmlFor="communicationPreference" className="friend_label">
              Preferred form of communication? (Select multiple)
            </label>
            <select
              id="communicationPreference"
              name="communicationPreference"
              multiple={true}
              value={formData.communicationPreference}
              onChange={handleMultiSelectChange}
              className="friend_select"
            >
              {communicationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="friend_button-container">
            <button type="submit" className="friend_button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </body>
  );
};

export default FriendForm;
