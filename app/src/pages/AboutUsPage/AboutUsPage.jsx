import React from "react";
import { AboutUs } from "../../components";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
