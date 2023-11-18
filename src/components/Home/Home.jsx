import React, { useEffect } from "react";
import Hero from "./Hero";
import Products from "./Products";
import AboutUs from "./AboutUs";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 900,
    });
  });
  return (
    <>
      <Hero />
      <AboutUs />
      <Products />
    </>
  );
}
