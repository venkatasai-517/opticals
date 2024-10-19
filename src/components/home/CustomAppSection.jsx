import React, { useState } from "react";

const CustomAppSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <section className="bg-violet-900 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-white z-10 mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Crafting Custom Optical Solutions for Your Vision Needs
          </h2>
          <p className="mb-8 text-lg">
            We specialize in designing personalized eyewear and eye care
            solutions that enhance your visual experience and promote the health
            of your eyes. Our dedicated team is committed to providing stylish
            and functional eyewear that meets your unique lifestyle, ensuring
            you see the world clearly and beautifully.
          </p>
          <button
            className="bg-violet-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-700 transition duration-300"
            onClick={handleModalToggle}
          >
            Explore Now &gt;
          </button>
        </div>
        <div className="lg:w-1/2 relative z-10">
          {/* Background Shape Image */}
          <img
            src="/images/Vector.png"
            alt="Background shape"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-lg" // Added rounded-lg
          />
          {/* Main Image with Same Shape */}
          <img
            src="/images/scolling3.jpg"
            alt="Mobile app illustration"
            className="relative mx-auto w-full max-w-sm lg:max-w-md xl:max-w-lg rounded-lg" // Added rounded-lg to maintain the shape
          />
        </div>
      </div>

      {/* Modal for Contact Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <form>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 p-2 w-full rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 p-2 w-full rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="border border-gray-300 p-2 w-full rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleModalToggle}
                  className="text-gray-500 underline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomAppSection;
