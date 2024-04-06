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
  return (
    <main className={styles.main}>
      <div className={styles.websiteTitle}>StudentMatch</div>
      <LoginForm />
      <Link href="/signUpForm" className={styles.link}>
        Don't have an account? Sign Up
      </Link>
    </main>
  );
}
