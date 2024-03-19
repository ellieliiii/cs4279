"use client";

import "./homePage.css";
import RoommateHome from "./roommateHome";
import ActivityHome from "./activityHome";
import Head from "next/head";
import FriendHome from "./friendHome";
import Link from "next/link";
import EditProfileForm from "./editProfileForm";

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
          <h1></h1>
          <RoommateHome />
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
          <h1></h1>
          <FriendHome />
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
