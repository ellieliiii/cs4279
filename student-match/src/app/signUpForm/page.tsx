"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./signUpForm.css";
// Correct import for Firebase v9+
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase"; // Adjust the path as necessary

interface SignUpFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
  }) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   onSubmit(formData);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Use Firebase Auth to create a new user
    // createUserWithEmailAndPassword(auth, formData.email, formData.password)
    //   .then((userCredential) => {
    //     // User created successfully, you can access the user like this:
    //     const user = userCredential.user;
    //     console.log("User registered:", user);

    //     // Optional: Update user profile with additional information
    //     // or save the additional information to your Firestore/Database

    //     // Redirect the user
    //     router.push("/homePage");
    //   })
    //   .catch((error) => {
    //     console.error("Error registering user:", error.message);
    //     // Handle errors here, such as showing an error message to the user
    //   });

    // Adds user to MongoDB
    const url = "http://localhost/api/user";
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

export default function SignUpFormPage() {
  const router = useRouter();
  const handleSubmit = (formData: { email: string; password: string }) => {
    // Send data to backend here
    console.log("Form submitted with data:", formData);
    router.push("/homePage");
  };
  return <SignUpForm onSubmit={handleSubmit}></SignUpForm>;
}
