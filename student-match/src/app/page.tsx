"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import "./page.module.css";
import "./loginForm/loginForm";
import LoginForm from "./loginForm/loginForm";
import { useRouter } from "next/navigation";

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
