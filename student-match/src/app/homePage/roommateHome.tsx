"use client";
import React from "react";
import Link from "../../../node_modules/next/link";

function RoommateHome() {
  // Direct navigation using standard anchor tag
  return (
    <div>
      <h1>Find a Roommate</h1>
      <Link legacyBehavior href="/roommateForm">
        <a>Fill Out Roommate Preference Form</a>
      </Link>
    </div>
  );
}

export default RoommateHome;
