"use client";

import "./homePage.css";
import RoommateHome from "./roommateHome";
import ActivityHome from "./activityHome";
import OrgHome from "./orgHome";
import Head from "next/head";
import FriendHome from "./friendHome";
import Link from "next/link";
import EditProfileForm from "./editProfileForm";

export default function Home() {

  const handleSubmit = (formData: Object) => {
    console.log(formData);
    // Send form data to backend here
  };

  const getUser = () => {
    const user = global?.window?.localStorage?.getItem("user");
    if (user) {
      return JSON.parse(user);
    } else {
      return { name: "", email: "", phoneNumber: "" };
    }
  }

  const user = getUser();

  return (
    <body className="homepage_body">
      <div>
        <div className="name">StudentMatch</div>
        <div className="tabs">
          <input type="radio" name="tabs" id="tabone" defaultChecked />
          <label htmlFor="tabone">Home</label>
          <div className="tab">
            <h1>Welcome to StudentMatch!</h1>
            <p>Explore each tab to find new friends on campus!</p>
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
            <h1></h1>
            <OrgHome />
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
            <EditProfileForm name={user.name} email={user.email} phoneNumber={user.phoneNumber} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </body>
  );
}