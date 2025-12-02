import React from "react";
import Hero from "../../components/Hero/Hero";
import Steps from "../../components/Steps/Steps";
import Testimonial from "../../components/Testimonial/Testimonial";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import WelcomeCard from "../../components/WelcomeCard";

const Home: React.FC = () => {
  return (
    <section id="home">
      <Hero />
      <Steps />
      <WhyChooseUs />
      <Testimonial />
      <WelcomeCard />
    </section>
  );
};

export default Home;
