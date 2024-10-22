import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

// Mock data for reviews
const reviews = [
  {
    name: "John Doe",
    date: "2024-10-01",
    stars: 5,
    comment:
      "Amazing service, very satisfied with the quality and attention to detail!",
    image: "/images/scolling4.jpg",
  },
  {
    name: "Jane Smith",
    date: "2024-09-25",
    stars: 4,
    comment:
      "Good overall, but there is definitely room for improvement in certain areas.",
    image: "/images/scolling5.jpg",
  },
  {
    name: "Samuel Green",
    date: "2024-08-15",
    stars: 3,
    comment:
      "The experience was decent, but I expected a bit more from the service provided.",
    image: "/images/scolling6.jpg",
  },
  {
    name: "Emily White",
    date: "2024-07-10",
    stars: 2,
    comment:
      "Not very satisfied. The service was slow and didn’t meet expectations.",
    image: "/images/scolling7.jpg",
  },
];

// Single review card component
const ReviewCard = ({ name, date, stars, comment, image, onContactClick }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-violet-700" : "text-gray-300"
        }`}
      />
    ));
  };

  const getAvatar = (name) => name.charAt(0).toUpperCase();

  return (
    <div className="flex-shrink-0 p-4 mx-4 space-x-4 transition-transform transform bg-white rounded-lg shadow-lg w-72 hover:scale-105 hover:shadow-xl">
      {/* Avatar or Image */}
      {image ? (
        <img
          src={image}
          alt={name}
          className="object-cover w-36 h-36 rounded-full"
        />
      ) : (
        <div className="flex items-center justify-center w-36 h-36 text-2xl font-bold text-white bg-violet-500 rounded-full">
          {getAvatar(name)}
        </div>
      )}

      <div className="flex-1">
        {/* Name, Date, Stars */}
        <div className="flex items-center justify-between mb-2">
          <div className="text-lg font-semibold text-violet-700">{name}</div>
          <div className="text-sm text-gray-500">{date}</div>
        </div>

        {/* Stars */}
        <div className="flex items-center mb-3">{renderStars(stars)}</div>

        {/* Comment */}
        <div className="text-base text-gray-800">{comment}</div>

        {/* Contact Button */}
        <div className="mt-4">
          <button
            onClick={onContactClick}
            className="px-4 py-2 text-sm text-white bg-violet-500 rounded-md w-full"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

// Contact Form Modal Component
const ContactFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "dc72e27f-92ec-4ed0-a3a5-57fd61f0a352");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

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

    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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
              School/College Name
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
              onClick={onClose} // Close modal
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  const scrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-8">
      <h2 className="mb-6 text-2xl font-bold text-center text-violet-900">
        User Reviews
      </h2>

      <div
        ref={scrollRef}
        className="flex px-4 space-x-4 overflow-x-auto scrollbar-hide"
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} onContactClick={openModal} />
        ))}
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ReviewsSection;
