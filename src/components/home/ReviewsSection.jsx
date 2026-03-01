import React, { useEffect, useState, useRef } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

// Single review card component
const ReviewCard = ({ Name = "Anonymous", Review, Rating, Date, Image }) => {
  const [showFullReview, setShowFullReview] = useState(false);

  // Render stars based on rating
  const renderStars = (rating) => {
    const ratingNumber = !isNaN(Number(rating)) ? Number(rating) : 0;
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`h-5 w-5 ${
          i < ratingNumber ? "text-violet-700" : "text-gray-300"
        }`}
      />
    ));
  };

  // Get the first letter for the avatar if no image
  const getAvatar = (name) => name.charAt(0).toUpperCase();

  return (
    <div className="flex-shrink-0 p-4 mx-4 space-x-4 transition-transform transform bg-white rounded-lg shadow-xl w-72 hover:scale-105 hover:shadow-xl mt-3 mb-5">
      {Image ? (
        <img
          src={Image}
          alt={`${Name}'s avatar`}
          className="object-cover w-36 h-36 rounded-full"
        />
      ) : (
        <div className="flex items-center justify-center w-36 h-36 text-2xl font-bold text-white bg-violet-500 rounded-full">
          {getAvatar(Name)}
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="text-lg font-semibold text-violet-700">{Name}</div>
          <div className="text-sm text-gray-500">{Date}</div>
        </div>
        <div className="flex items-center mb-3">{renderStars(Rating)}</div>
        <div className="text-base text-gray-800">
          <p
            className={`overflow-hidden ${
              showFullReview ? "" : "line-clamp-3"
            }`}
          >
            {Review}
          </p>
          {Review.length > 100 && (
            <button
              onClick={() => setShowFullReview(!showFullReview)}
              className="mt-2 text-sm font-semibold text-violet-700 focus:outline-none"
            >
              {showFullReview ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Reviews Section component
const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Fetch reviews from the API
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://sheetdb.io/api/v1/fkyr6lwos6nxi"
        );
        const data = response.data;

        // Format reviews data
        const formattedReviews = data.map((review) => ({
          Name: review.Name || "Anonymous",
          Review: review.Review || "No comment provided",
          Rating:
            review.Rating && !isNaN(Number(review.Rating))
              ? Number(review.Rating)
              : 0,
          Date: review.Date || "Unknown date",
          Image: review.Image || null,
        }));
        setReviews(formattedReviews);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto mt-8">
      <h2 className="mb-6 text-2xl font-bold text-center text-violet-900">
        User Reviews
      </h2>

      {loading ? (
        <div className="text-center text-violet-700">Loading reviews...</div>
      ) : reviews.length > 0 ? (
        <div
          ref={scrollRef}
          className="flex px-4 space-x-4 overflow-x-auto scrollbar-hide"
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No reviews available.</div>
      )}
    </div>
  );
};

export default ReviewsSection;
