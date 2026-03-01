import React from "react";
import Carousel from "../components/home/Carousel";
import About from "../components/home/About";
import ExploreOptics from "../components/home/ExploreOptics";
import SpecialOffers from "../components/home/SpecialOffres";
import OpticalLogos from "../components/home/OpticalLogos";
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

      <ExploreOptics />
      <SpecialOffers />
      <OpticalLogos />

      <ReviewsSection />
    </>
  );
};

export default HomePage;
