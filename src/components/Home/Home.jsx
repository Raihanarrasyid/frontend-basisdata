import React from "react";
import Hero from "./Hero";
import Products from "./Products";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import AboutUs from "./AboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Products />
    </>
  );
}
