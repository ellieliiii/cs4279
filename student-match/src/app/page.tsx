import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.centeredContainer}>
      <div className={styles.mainTitle}>
        <h2>StudentMatch</h2>
      </div>
      <div>
        <Link
          href="/homePage"
          className={styles.loginButton}
          target="_self"
          rel="noopener noreferrer"
        >
          Login
        </Link>
      </div>
    </main>
  );
}
