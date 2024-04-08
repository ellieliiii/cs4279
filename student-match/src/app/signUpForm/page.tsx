"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./signUpForm.css";
// Correct import for Firebase v9+
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Adjust the path as necessary

const SignUpForm: React.FC = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createUserRequest = async (data: Object) => {
    // Adds user to MongoDB
    const url = "http://ec2-3-140-189-217.us-east-2.compute.amazonaws.com/api/user";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status == 201) {
      const data = await response.json();
      // data is user data. Store in some state to indicate which user is currently logged in
      console.log(data);
      global?.window?.localStorage?.setItem("user", JSON.stringify(data)); 
      return true;
    }    
    return false;
  };

  // TODO: add warnings for invalid email/password, if email exists, etc.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Use Firebase Auth to create a new user
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        let data = {
          userId: res.user.uid,
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
        };
        createUserRequest(data)
          .then((res) => {
            if (res) {
              router.push("/homePage");
            }
          })
          .catch((error) => {
            console.error("Error creating user:", error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signup-form-container">
      <h1>Create a Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
