import React from "react";
import Carousel from "../components/home/Carousel";
import About from "../components/home/About";
import CustomAppSection from "../components/home/CustomAppSection";
import FullStackCourseSection from "../components/home/FullStackCourseSection";
import TechLogos from "../components/home/TechLogos";
import ReviewsSection from "../components/home/ReviewsSection";
import ServicesWeOffer from "../components/home/ServicesWeOffer";
import ProductScroll from "../components/home/Productscrolling";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <section id="aboutus" className="py-16">
        <About />
      </section>
      <section id="products" className="py-16">
        <ProductScroll />
      </section>
      <section id="services" className="py-16">
        <ServicesWeOffer />
      </section>

      <CustomAppSection />
      <FullStackCourseSection />
      <TechLogos />

      <ReviewsSection />
    </>
  );
};

export default HomePage;
