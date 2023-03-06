import React, { useState } from "react";
import { PriceCard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pricing = () => {
  const pricingOptionsSemester = [
    {
      id: 1,
      title: "Normal school",
      price: "€150/semester",
      features: ["Up to 100 users", "Unlimited maps"],
      callToAction: "Sign Up",
    },
    {
      id: 2,
      title: "Big school",
      price: "Custom price",
      features: ["100+ users", "Unlimited maps"],
      callToAction: "Sign Up",
    },
  ];
  const pricingOptionsYearly = [
    {
      id: 1,
      title: "Normal school",
      price: "€300/year",
      features: ["Up to 100 users", "Unlimited maps"],
      callToAction: "Sign Up",
    },
    {
      id: 2,
      title: "Big school",
      price: "Custom price",
      features: ["100+ users", "Unlimited maps"],
      callToAction: "Sign Up",
    },
  ];

  const [showSemester, setShowSemester] = useState(true);
  const [semesterActive, setSemesterActive] = useState(false);
  const [yearlyActive, setYearlyActive] = useState(true);

  const handleSemesterClick = () => {
    setShowSemester(true);
    setSemesterActive(true);
    setYearlyActive(false);
  };

  const handleYearlyClick = () => {
    setShowSemester(false);
    setYearlyActive(true);
    setSemesterActive(false);
  };

  return (
    <div className="pricing" id="Pricing">
      <h2>So how does it work?</h2>
      <p>
        You register your school and can use the seating map free for three
        months.
      </p>
      <FontAwesomeIcon icon="fa-solid fa-chevron-down" className="downIcon" />
      <p>
        A week before the trial ends, we will send you an email and remind you
        that your trial is ending.
      </p>
      <FontAwesomeIcon icon="fa-solid fa-chevron-down" className="downIcon" />
      <p>
        If you choose to continue with the generator, you will receive an
        invoice when the semester or year ends.
      </p>
      <button
        onClick={handleSemesterClick}
        className={semesterActive ? "active" : "notactive"}
      >
        Per semester
      </button>
      <button
        onClick={handleYearlyClick}
        className={yearlyActive ? "active" : "notactive"}
      >
        Per year
      </button>
      {showSemester ? (
        <div className="pricecards">
          {pricingOptionsSemester.map((item) => (
            <PriceCard
              key={item.id}
              title={item.title}
              price={item.price}
              features={item.features}
              action={item.callToAction}
            />
          ))}
        </div>
      ) : (
        <div className="pricecards">
          {pricingOptionsYearly.map((item) => (
            <PriceCard
              key={item.id}
              title={item.title}
              price={item.price}
              features={item.features}
              action={item.callToAction}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pricing;
