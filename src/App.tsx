import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Steps from "./components/Steps/Steps";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
