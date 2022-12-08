import React from "react";
import { destinations } from "../../utils/constants/Destinations";
import DestinationCard from "../DestinationCard/DestinationCard";

const Destinations = () => {
  const getFeaturedPackages = () => {
    return destinations.filter((item) => item.featured);
  };
  return (
    <section className="section destination">
      <div className="container">
        <p className="section-subtitle">Destinations</p>
        <h2 className="h2 section-title">Choose Your Place</h2>
        <ul className="destination-list">
          {getFeaturedPackages().map((item, i) => {
            return (
              <li key={i}>
                <DestinationCard data={item} smallTitle />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Destinations;
