"use client";

import React, { useState } from "react";
import "./loginForm.css";
import { useRouter } from "next/navigation";
// Correct import for Firebase v9+
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Adjust the path as necessary

const LoginForm: React.FC = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getUserRequest = async (userId: string) => {
    // Get user from MongoDB
    const url = "https://3-140-189-217.nip.io/api/user/id/";
    const response = await fetch(url + userId, {
      method: "GET",
    });
    if (response.status == 200) {
      const data = await response.json();
      // data is user data. Store in some state to indicate which user is currently logged in
      global?.window?.localStorage?.setItem("user", JSON.stringify(data));
      return true;
    }
    return false;
  }; 

  // TODO: add warnings for invalid email/password, invalid auth, etc.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        getUserRequest(res.user.uid)
          .then((res) => {
            if (res) {
              router.push("/homePage");
            }
          })
          .catch((error) => {
            console.log("Error getting user:", error);
          });
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <div className="login-form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
