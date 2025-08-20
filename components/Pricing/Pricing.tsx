"use client";

import React, { useEffect, useState } from "react";
import PricingCard from "./PricingCard";
import Subtitle from "../utils/Subtitle";
import Desc from "../utils/Desc";

type PricingPlan = {
  id: string;
  title: string;
  desc: string;
  cost: string; 
};

const Pricing = () => {
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const res = await fetch("/api/tariffs"); // ✅ добавил /
      const data: PricingPlan[] = await res.json();
      console.log(data);
      setPricingPlans(data);
    };
    fetchPlans();
  }, []);

  return (
    <section id="pricing" className="pricing-section ">
      <div className="pricing-header text-center mb-10">
        <Subtitle>Simple & Fair Pricing</Subtitle>
        <Desc variant="gray">
          Choose the plan that's right for you. No hidden fees, no complicated
          contracts.
        </Desc>
      </div>

      <div className="pricing-grid grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            cost={plan.cost}
            desc={plan.desc}
            title={plan.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
