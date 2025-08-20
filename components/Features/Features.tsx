import React from "react";
import FeaturesCard from "./FeaturesCard";
import Subtitle from "../utils/Subtitle";

import { featuresData } from "@/data/Data";


const Features = () => {
  return (
    <section id="features" className="features-section">
      <Subtitle>Features</Subtitle>
      <div className="features-section__row">
        <div className="features-section__grid">
          {featuresData.map(features => (
            <FeaturesCard key={features.id} description={features.description} title={features.title} number={features.id}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
