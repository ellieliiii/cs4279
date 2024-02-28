"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import "./page.module.css";
import "./loginForm/loginForm";
import LoginForm from "./loginForm/loginForm";
import { useRouter } from "next/navigation";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBiu0OQjMTCBg5BGnBxcEgw-BYbyb2xNc8",
    authDomain: "studentmatch-6d66a.firebaseapp.com",
    projectId: "studentmatch-6d66a",
    storageBucket: "studentmatch-6d66a.appspot.com",
    messagingSenderId: "546134291861",
    appId: "1:546134291861:web:fd45aeabeb7be0492e729c",
    measurementId: "G-P6B7Y80B9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function Home() {
  const router = useRouter();
  const handleSubmit = (formData: { email: string; password: string }) => {
    // Send data to backend here
    console.log("Form submitted with data:", formData);
    router.push("/homePage");
  };
  return (
    <main className={styles.main}>
      <div className={styles.websiteTitle}>StudentMatch</div>
      <LoginForm onSubmit={handleSubmit} />
      <Link href="/signUpForm" className={styles.link}>
        Don't have an account? Sign Up
      </Link>
    </main>
  );
}
