// app/index.js
import React from "react";
import { Redirect } from "expo-router";

export default function Index() {
  // Simple redirect – later you can check auth state and redirect to /home if logged in
  return <Redirect href="/login" />;
}
