import React from "react";
import {
  MdHealthAndSafety,
  MdVisibility,
  MdBuild,
  MdBuildCircle,
  MdWbSunny,
} from "react-icons/md";
import { FaGlasses } from "react-icons/fa"; // FontAwesome Glasses Icon

const services = [
  {
    icon: <MdHealthAndSafety className="text-green-500" />, // Color for this icon
    title: "Computerized Eye Testing",
  },
  {
    icon: <MdVisibility className="text-blue-500" />, // Color for this icon
    title: "Frames & Lenses",
  },
  {
    icon: <MdBuild className="text-red-500" />, // Color for this icon
    title: "Optical Accessories",
  },
  {
    icon: <FaGlasses className="text-purple-500" />, // Color for this icon
    title: "Reading Glasses",
  },
  {
    icon: <MdBuildCircle className="text-orange-500" />, // Color for this icon
    title: "Optical Repair",
  },
  {
    icon: <MdWbSunny className="text-yellow-500" />, // Color for this icon
    title: "Sun Glasses",
  },
];

const ServicesWeOffer = () => {
  return (
    <section id="services">
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center pb-8">
            <h1 className="relative text-4xl font-bold text-center inline-block before:absolute before:content-[''] before:w-full before:h-1 before:bg-yellow-500 before:bottom-[-4px] before:left-0">
              Services We Offer
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="aspect-square bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group"
              >
                <div className="flex flex-col items-center justify-center h-full p-4">
                  <div className="text-4xl mb-2 group-hover:text-green-500 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-center text-gray-800 group-hover:text-green-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOffer;
