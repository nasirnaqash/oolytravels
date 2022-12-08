import React from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import { Destinations, FeaturedTours, HeroicBanner } from "../../components";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <main>
        <HeroicBanner />
        <Destinations />
        <FeaturedTours />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
