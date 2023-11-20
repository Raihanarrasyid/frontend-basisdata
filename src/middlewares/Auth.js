import React from "react";
import { Navigate } from "react-router-dom";

export default function Auth({ children }) {
  const token = localStorage.getItem("auth-storage");
}
