import React from "react";

const WelcomeCard: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto my-15">
      <div className="bg-[#cdf6cd] text-center p-8 rounded-2xl">
        <h1 className="text-4xl text-black pb-6">
          Ready to master your M-Pesa finances?
        </h1>
        <p className="pb-6">
          Get started with Pesalens today and gain the clarity you need to take{" "}
          <br />
          control of your spending
        </p>
        <button className="bg-[#2bee2b] text-lg text-black py-2 px-10 rounded-md hover:cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default WelcomeCard;
