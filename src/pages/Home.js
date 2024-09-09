import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import CityInfo from "../components/home/CityInfo";
import Footer from "../components/home/Footer";
import OtherCities from "../components/home/OtherCities";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CityInfo />
      <OtherCities />
      <Footer />
    </div>
  );
}
