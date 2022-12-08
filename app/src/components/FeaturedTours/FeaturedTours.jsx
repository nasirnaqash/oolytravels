import React from "react";
import { packages } from "../../utils/constants/Packages";
import FeatureCard from "../FeatureCard/FeatureCard";

const FeaturedTours = (props) => {
  const getFeaturedPackages = () => {
    return packages.filter((item) => item.featured);
  };

  return (
    <section className="section popular">
      <div className="container">
        <p className="section-subtitle">Featured Tours</p>

        <h2 className="h2 section-title">Most Popular Tours</h2>

        <ul className="popular-list">
          {getFeaturedPackages().map((item, i) => {
            return (
              <li key={i}>
                <FeatureCard data={item} smallTitle />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedTours;
