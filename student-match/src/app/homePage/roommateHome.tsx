"use client";
import React from "react";

import Link from "../../../node_modules/next/link";

function RoommateHome() {
  // Direct navigation using standard anchor tag
  return (
    <div>
      <h1>Find a Roommate</h1>
      <Link href="/roommateForm">Fill Out Roommate Preference Form</Link>
    </div>
  );
}

export default RoommateHome;
