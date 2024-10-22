import React, { useState } from "react";
import Swal from "sweetalert2";

// Contact Form Modal Component
const ContactFormModal = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isOpen) return null;

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "dc72e27f-92ec-4ed0-a3a5-57fd61f0a352");

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
        text: "We Will Contact You Soon!",
        icon: "success",
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
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
            <label className="block text-sm font-medium mb-2" htmlFor="email">
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
            <label className="block text-sm font-medium mb-2" htmlFor="number">
              Mobile Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              className="w-full border rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="clgname">
              School/Collage Name
            </label>
            <input
              type="text"
              id="clgname"
              name="clgname"
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border rounded-md p-2"
              rows="4"
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
  );
};

const FullStackCourseSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 sm:w-2/5 md:w-1/3 lg:w-2/5 xl:w-1/2 h-1/2 sm:h-2/5 md:h-1/3 lg:h-2/5 xl:h-1/2 bg-violet-600 rounded-br-full transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 relative inline-block before:absolute before:content-[''] before:bg-yellow-500 before:-bottom-2 before:h-1 before:w-full">
            SPECIAL <span className="text-green-600">OFFERS</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/images/offers.jpg"
              alt="Full Stack Course"
              className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 lg:pl-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-600 mb-4 lg:mb-6">
              Special Offers Only for Students
            </h3>
            <p className="mb-6 text-gray-600 lg:text-lg">
              Sunglass Hut stores are located in India, the United States,
              Mexico, Canada, the Caribbean, Brazil, continental Europe, the
              United Kingdom, Australia, New Zealand, Hong Kong, Singapore,
              South Africa, and the Middle East.
            </p>
            <p className="mb-6 text-gray-600 lg:text-lg">
              Click Here to <span className="font-bold">Contact</span> Us
            </p>
            <button
              onClick={openModal}
              className="bg-violet-500 text-white font-bold py-2 px-6 lg:py-3 lg:px-8 rounded-full hover:bg-green-700 transition duration-300 mb-6 lg:mb-8"
            >
              Contact Us
            </button>
            <div className="flex space-x-4 lg:space-x-6">
              <img
                src="/images/scolling1.jpg" // Path to your HTML5 image
                alt="HTML5"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
              <img
                src="/images/scolling9.jpg" // Path to your JavaScript image
                alt="JavaScript"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
              <img
                src="/images/scolling6.jpg" // Path to your React image
                alt="React"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
              <img
                src="/images/scolling4.jpg" // Path to your Node.js image
                alt="Node.js"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
            </div>
          </div>
        </div>
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default FullStackCourseSection;
