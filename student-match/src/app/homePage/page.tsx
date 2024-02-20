"use client";

import "./homePage.css";
import ActivityHome from "./activityHome";
import Head from "next/head";
import Link from "next/link";
import EditProfileForm from "./editProfileForm";

function RoommatePreferencesForm() {
  return (
    <form className="form-container">
      <div className="form-field-container">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Your full name"
        />
      </div>
      <div className="form-field-container">
        <label htmlFor="vanderbiltEmail">Vanderbilt Email</label>
        <input
          type="email"
          id="vanderbiltEmail"
          name="vanderbiltEmail"
          placeholder="Your Vanderbilt email"
        />
      </div>
      <div className="form-field-container">
        <label htmlFor="vunetId">VUnetID</label>
        <input
          type="text"
          id="vunetId"
          name="vunetId"
          placeholder="Your VUnetID"
        />
      </div>
      <div className="form-field-container">
        <label htmlFor="lifestylePreferences">Lifestyle Preferences</label>
        <select id="lifestylePreferences" name="lifestylePreferences">
          <option value="earlyBird">Early Bird</option>
          <option value="nightOwl">Night Owl</option>
          <option value="studious">Studious</option>
          <option value="socialButterfly">Social Butterfly</option>
        </select>
      </div>
      <div className="form-field-container">
        <label htmlFor="cleanliness">Cleanliness</label>
        <select id="cleanliness" name="cleanliness">
          <option value="tidy">Tidy</option>
          <option value="average">Average</option>
          <option value="messy">Messy</option>
        </select>
      </div>
      <div className="form-field-container">
        <label>How often do you have overnight guests over?</label>
        <input type="range" min="1" max="100" defaultValue="50" />
        <div className="range-labels">
          <span>Everyday</span>
          <span>Monthly</span>
          <span>Never</span>
        </div>
      </div>
      {/* Add more fields as needed */}
      <button type="submit">Submit Preferences</button>
    </form>
  );
}

export default function Home() {
  const handleSubmit = (formData) => {
    console.log(formData);
    // Send form data to backend here
  };

  return (
    <div>
      <div className="name">StudentMatch</div>
      <div className="tabs">
        <input type="radio" name="tabs" id="tabone" defaultChecked />
        <label htmlFor="tabone">Home</label>
        <div className="tab">
          <h1>Tab One Content</h1>
          <p>Welcome to StudentMatch!</p>
        </div>

        <input type="radio" name="tabs" id="tabtwo" />
        <label htmlFor="tabtwo">Roommate</label>
        <div className="tab">
          <h1>Find Your Roommate</h1>
          <RoommatePreferencesForm />
        </div>

        <input type="radio" name="tabs" id="tabthree" />
        <label htmlFor="tabthree">Org</label>
        <div className="tab">
          <h1>Tab Three Content</h1>
          <p>Tab Three</p>
        </div>

        <input type="radio" name="tabs" id="tabfour" />
        <label htmlFor="tabfour">Activity</label>
        <div className="tab">
          <h1></h1>
          <ActivityHome />
        </div>

        <input type="radio" name="tabs" id="tabfive" />
        <label htmlFor="tabfive">Friend</label>
        <div className="tab">
          <h1>Tab Five Content</h1>
          <p>Tab five</p>
        </div>

        <input type="radio" name="tabs" id="tabsix" />
        <label htmlFor="tabsix">Profile</label>
        <div className="tab">
          <h1>Edit Profile</h1>
          <EditProfileForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
