import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

// Star Rating Component
const StarRating = ({ rating, onRatingChange }) => {
  const handleStarClick = (index) => {
    onRatingChange(index + 1);
  };

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          className={`cursor-pointer text-2xl ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

// Contact Form Modal Component
const ContactFormModal = ({ isOpen, onClose }) => {
  const [disable, setDisable] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(""); // Store the review text

  // Limit the review to 50 words
  const handleReviewChange = (e) => {
    const inputText = e.target.value;
    const words = inputText.split(" ");
    if (words.length <= 50) {
      setReview(inputText);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);

    const formData = new FormData(e.target);

    // Append selected data to formData
    if (selectedDate) {
      formData.append("Date", selectedDate);
    }
    formData.append("Rating", rating);

    try {
      const response = await fetch(import.meta.env.VITE_API_KEY_Google_Sheet, {
        method: "POST",
        body: formData,
      });
      const result = await response.text();
      if (result) {
        Swal.fire({
          title: "Thank You For Booking Free Consulting",
          text: "Our Team Will Contact You Soon",
          icon: "success",
          confirmButtonColor: "#00FF00",
        });
        onClose();
        setDisable(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Rate Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="Review">
              Review (Max 50 words)
            </label>
            <textarea
              id="Review"
              name="Review"
              value={review}
              onChange={handleReviewChange}
              className="w-full border rounded-md p-2"
              rows="3"
              placeholder="Write your review here..."
              required
            />
            <p className="text-sm text-gray-500">
              {review.split(" ").length}/50 words
            </p>
          </div>

          {/* Star Rating Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Rating</label>
            <StarRating rating={rating} onRatingChange={setRating} />
          </div>

          {/* New Date Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="Date">
              Date
            </label>
            <input
              type="date"
              id="Date"
              name="Date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              disabled={disable}
            >
              {disable ? "Sending..." : "Submit"}
            </button>
            <button
              type="button"
              className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
              onClick={onClose}
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
  const [images, setImages] = useState([]);
  const sheetId = "1yy_temkMtdEdbU4qneZULN5BjKao5VtEZL9O3SV5E3E"; // Replace with your actual Google Sheet ID
  const apiKey = "https://sheetdb.io/api/v1/m0oqliglk223b"; // Replace with your actual API key

  useEffect(() => {
    // Fetch data from Google Sheets API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`
        );
        const data = response.data.values;
        setImages(data.map((row) => row[0])); // Assuming image URLs are in the first column
      } catch (error) {
        console.error("Error fetching data from Google Sheets", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
            SPECIAL <span className="text-green-600">OFFERS</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {images.length > 0 ? (
              images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
              ))
            ) : (
              <p>Loading images...</p>
            )}
          </div>
          <div className="md:w-1/2 md:pl-8 lg:pl-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-600 mb-4 lg:mb-6">
              Special Offers Only for Students
            </h3>
            <p className="mb-6 text-gray-600 lg:text-lg">
              Sunglass Hut stores are located in India, the United States, and
              many other locations.
            </p>

            <button
              onClick={openModal}
              className="bg-violet-500 text-white font-bold py-2 px-6 lg:py-3 lg:px-8 rounded-full hover:bg-green-700 transition duration-300 mb-6 lg:mb-8"
            >
              Feedback
            </button>
          </div>
        </div>
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default FullStackCourseSection;
