import React from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import { destinations } from "../../utils/constants/Destinations";
import DestinationCard from "../../components/DestinationCard/DestinationCard";

const DestinationPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <section className="flex items-center flex-col pt-16 pb-20">
          <div className="text-center mt-10">
            <p className="section-subtitle text-8xl">Destinations</p>
            <h2 className="h2 section-title text-7xl">Choose Your Place</h2>
          </div>
          <div className="flex mt-20 flex-wrap gap-6 items-center justify-between">
            {destinations.map((item) => (
              <div className="w-[32%] ">
                <DestinationCard data={item} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DestinationPage;
