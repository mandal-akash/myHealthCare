import React from "react";
import "../style/hero.css"
const Hero = () => {
  return (
    <div className="hero h-[90vh] flex flex-col items-center bg-sky-50">
      <div className="text-center space-y-6 mt-36 pb-8">
        <h1 className="text-8xl font-semibold text-neutral-600">
          Welcome to <span className="text-rose-700">my</span>
          <span className="text-neutral-600">HealthCare</span>
        </h1>
        <p className="w-[50vw] text-xl mx-auto font-semibold text-neutral-500">
          myHealthCare involves the diagnosis, treatment, and prevention of
          illness, promoting overall physical and mental well-being.
        </p>
      </div>
      <div className="">
        <button className="heroBtn learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Know More</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
