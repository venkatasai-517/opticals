import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaPhone } from "react-icons/fa";
import Swal from "sweetalert2";

// Carousel content data
const carouselContent = [
  {
    image: "/images/1.webp",
    heading: "Mr.Optics",
    content: "Your One-Stop Destination for All Your Vision Needs.",
  },
  {
    image: "/images/2.webp",
    heading: "Mr.Optics",
    content: "We are here to help your eyes shine and your style flourish.",
  },
  {
    image: "/images/3.webp",
    heading: "Mr.Optics",
    content:
      "This is the first line of content. This is the second line of content.",
  },
  // Add more slides as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle form submission
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   // Add your form submission logic here
  //   setIsModalOpen(false); // Close the modal after submission
  // };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0e841ebf-1176-4dcb-91db-948cf6ce89c5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    setIsModalOpen(false); // Close the modal after submission

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
  };

  return (
    <section id="home">
      <div className="relative w-full">
        {/* Carousel Wrapper */}
        <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          {carouselContent.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              {/* Text content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 md:px-12 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {item.heading}
                </h2>
                <p className="mb-8 text-lg md:text-xl max-w-2xl drop-shadow-md">
                  {item.content.split(". ").map((line, i) => (
                    <span key={i} className="block mb-2">
                      {line}
                    </span>
                  ))}
                </p>
                {/* Updated Buttons */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <button
                    className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700 transition duration-300 flex items-center justify-center shadow-md"
                    onClick={() => setIsModalOpen(true)} // Open modal
                  >
                    Book a free consulting call
                  </button>
                  <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300 flex items-center justify-center shadow-md">
                    <FaPhone className="mr-2" />
                    <a href="tel:+919347735047"> Contact Us</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-1/2 left-4 z-30 p-2 md:p-3 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none transform -translate-y-1/2 transition duration-300"
          onClick={handlePrev}
        >
          <FaArrowLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-4 z-30 p-2 md:p-3 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none transform -translate-y-1/2 transition duration-300"
          onClick={handleNext}
        >
          <FaArrowRight className="w-5 h-5" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselContent.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Contact Us Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 md:p-10 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">
                Book a free consulting call
              </h2>
              <form onSubmit={onSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full border rounded-md p-2"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
                    onClick={() => setIsModalOpen(false)} // Close modal
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Carousel;
