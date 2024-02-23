"use client";
import "./roommateForm.css"; // Ensure this path matches your updated CSS file name
import React, { useState } from "react";

interface RoommateFormProps {
  onSubmit: (formData: any) => void;
}

const RoommateForm: React.FC<RoommateFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    vanderbiltEmail: "",
    vunetId: "",
    pets: "",
    sleepSchedulePreferences: "earlyBird",
    cleanliness: "tidy",
    overnightGuestsFrequency: 50,
    studyNoisePreference: 50, // New state for study noise preference
    studyLocationPreference: 50, // New state for study location preference
    friendsOverFrequency: 50, // New state for frequency of having friends over
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h1>Roommate Preferences</h1>
      <form onSubmit={handleSubmit} className="roommate_form-container">
        <div className="roommate_form-field-container">
          <label htmlFor="fullName" className="roommate_label">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            className="roommate_input"
          />
        </div>

        <div className="roommate_form-field-container">
          <label htmlFor="vanderbiltEmail" className="roommate_label">
            Vanderbilt Email
          </label>
          <input
            type="email"
            id="vanderbiltEmail"
            name="vanderbiltEmail"
            value={formData.vanderbiltEmail}
            onChange={handleChange}
            placeholder="Your Vanderbilt email"
            className="roommate_input"
          />
        </div>

        <div className="roommate_form-field-container">
          <label htmlFor="vunetId" className="roommate_label">
            VUnetID
          </label>
          <input
            type="text"
            id="vunetId"
            name="vunetId"
            value={formData.vunetId}
            onChange={handleChange}
            placeholder="Your VUnetID"
            className="roommate_input"
          />
        </div>

        <div className="roommate_form-field-container">
          <label htmlFor="sleepSchedulePreferences" className="roommate_label">
            Sleep Schedule Preferences
          </label>
          <select
            id="sleepSchedulePreferences"
            name="sleepSchedulePreferences"
            value={formData.sleepSchedulePreferences}
            onChange={handleChange}
            className="roommate_select"
          >
            <option value="earlyBird">Early Bird</option>
            <option value="nightOwl">Night Owl</option>
          </select>
        </div>

        <div className="roommate_form-field-container">
          <label htmlFor="pets" className="roommate_label">
            Do you have any pets
          </label>
          <select
            id="pets"
            name="pets"
            value={formData.pets}
            onChange={handleChange}
            className="roommate_select"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="roommate_form-field-container">
          <label className="roommate_label">Cleanliness</label>
          <input
            type="range"
            min="1"
            max="100"
            value={formData.cleanliness}
            onChange={handleChange}
            name="cleanliness"
            className="roommate_input"
          />
          <div className="roommate_range-labels">
            <span>Tidy</span>
            <span>Average</span>
            <span>Messy</span>
          </div>
        </div>

        <div className="roommate_form-field-container">
          <label className="roommate_label">
            How often do you have overnight guests over?
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={formData.overnightGuestsFrequency}
            onChange={handleChange}
            name="overnightGuestsFrequency"
            className="roommate_input"
          />
          <div className="roommate_range-labels">
            <span>Everyday</span>
            <span>Monthly</span>
            <span>Never</span>
          </div>
        </div>

        {/* New slider for study noise preference */}
        <div className="roommate_form-field-container">
          <label className="roommate_label">
            Are you comfortable with background noise?
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={formData.studyNoisePreference}
            onChange={handleChange}
            name="studyNoisePreference"
            className="roommate_input"
          />
          <div className="roommate_range-labels">
            <span>Quiet</span>
            <span>Moderate</span>
            <span>Noisy</span>
          </div>
        </div>

        {/* New slider for study location preference */}
        <div className="roommate_form-field-container">
          <label className="roommate_label">
            Do you normally study in your room or elsewhere?
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={formData.studyLocationPreference}
            onChange={handleChange}
            name="studyLocationPreference"
            className="roommate_input"
          />
          <div className="roommate_range-labels">
            <span>In Room</span>
            <span>Both</span>
            <span>Elsewhere</span>
          </div>
        </div>

        {/* New slider for how often friends are over */}
        <div className="roommate_form-field-container">
          <label className="roommate_label">
            How often do you like to have friends over?
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={formData.friendsOverFrequency}
            onChange={handleChange}
            name="friendsOverFrequency"
            className="roommate_input"
          />
          <div className="roommate_range-labels">
            <span>Daily</span>
            <span>Weekly</span>
            <span>Never</span>
          </div>
        </div>

        <div className="roommate_button-container">
          <button type="submit" className="roommate_button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoommateForm;
