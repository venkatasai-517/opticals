import React, { useRef } from "react";

// Mock product data
const products = [
  {
    src: "/images/scolling1.jpg",
    alt: "Product 1",
    name: "Stylish Sunglasses",
  },
  { src: "/images/scolling2.jpg", alt: "Product 2", name: "Luxury Frames" },
  { src: "/images/scolling3.jpg", alt: "Product 3", name: "Classic Eyewear" },
  { src: "/images/scolling4.jpg", alt: "Product 4", name: "Modern Specs" },
  { src: "/images/scolling5.jpg", alt: "Product 5", name: "Trendy Glasses" },
  {
    src: "/images/scolling6.jpg",
    alt: "Product 6",
    name: "Polarized Sunglasses",
  },
  { src: "/images/scolling7.jpg", alt: "Product 7", name: "Sporty Eyewear" },
  { src: "/images/scolling8.jpg", alt: "Product 8", name: "Designer Frames" },
  { src: "/images/scolling9.jpg", alt: "Product 9", name: "Reading Glasses" },
];

const ProductScroll = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: -200, behavior: "smooth" }); // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: 200, behavior: "smooth" }); // Adjust scroll amount as needed
    }
  };

  return (
    <section className="py-8 md:py-16 bg-gray-100" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
          Our Products
        </h2>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition duration-300"
          >
            &#10094; {/* Left Arrow */}
          </button>
          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth py-2"
          >
            {[...products].map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8 transition-all duration-300 ease-in-out"
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-cover rounded-lg transition-all duration-300 ease-in-out"
                />
                <p className="mt-2 text-center text-gray-700">{product.name}</p>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition duration-300"
          >
            &#10095; {/* Right Arrow */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductScroll;
