"use client";
// use client
import React, { useState } from "react";
import "./roommateForm.css"; // Adjust path as necessary

interface RoommateFormProps {
  onSubmit: (formData: any) => void; // Define your form data type or use 'any' for now
}

const RoommateForm: React.FC<RoommateFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    vanderbiltEmail: "",
    vunetId: "",
    sleepSchedulePreferences: "earlyBird", // Default value as example
    cleanliness: "tidy", // Default value as example
    overnightGuestsFrequency: 50, // Default value as example
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
    onSubmit(formData); // Handle the submission logic here
    // Reset form or redirect as needed
  };

  return (
    <div>
      <h1>Roommate Preferences</h1>
      <form onSubmit={handleSubmit} className="form-container">
        {/* Full Name */}
        <div className="form-field-container">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </div>

        {/* Vanderbilt Email */}
        <div className="form-field-container">
          <label htmlFor="vanderbiltEmail">Vanderbilt Email</label>
          <input
            type="email"
            id="vanderbiltEmail"
            name="vanderbiltEmail"
            value={formData.vanderbiltEmail}
            onChange={handleChange}
            placeholder="Your Vanderbilt email"
          />
        </div>

        {/* VUnetID */}
        <div className="form-field-container">
          <label htmlFor="vunetId">VUnetID</label>
          <input
            type="text"
            id="vunetId"
            name="vunetId"
            value={formData.vunetId}
            onChange={handleChange}
            placeholder="Your VUnetID"
          />
        </div>

        {/* Sleep Schedule Preferences */}
        <div className="form-field-container">
          <label htmlFor="sleepSchedulePreferences">
            Sleep Schedule Preferences
          </label>
          <select
            id="sleepSchedulePreferences"
            name="sleepSchedulePreferences"
            value={formData.sleepSchedulePreferences}
            onChange={handleChange}
          >
            <option value="earlyBird">Early Bird</option>
            <option value="nightOwl">Night Owl</option>
            <option value="studious">Studious</option>
            <option value="socialButterfly">Social Butterfly</option>
          </select>
        </div>

        {/* Cleanliness */}
        <div className="form-field-container">
          <label>cleanliness</label>
          <input
            type="range"
            min="1"
            max="100"
            value={formData.cleanliness}
            onChange={handleChange}
            name="cleanliness"
          />
          <div className="range-labels">
            <span>Tidy</span>
            <span>Average</span>
            <span>Messy</span>
          </div>
        </div>

        {/* Overnight Guests Frequency */}
        <div className="form-field-container">
          <label>How often do you have overnight guests over?</label>
          <input
            type="range"
            min="1"
            max="100"
            value={formData.overnightGuestsFrequency}
            onChange={handleChange}
            name="overnightGuestsFrequency"
          />
          <div className="range-labels">
            <span>Everyday</span>
            <span>Monthly</span>
            <span>Never</span>
          </div>
        </div>

        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RoommateForm;
