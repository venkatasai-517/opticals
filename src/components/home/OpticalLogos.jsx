import React, { useState, useRef, useEffect } from "react";

const images = [
  { src: "/images/ray-ban.svg", alt: "Ray-ban" },
  { src: "/images/Police.svg", alt: "Police" },
  { src: "/images/prada.svg", alt: "JavaScript" },
  { src: "/images/Cartier.png", alt: "Cartier" },
  { src: "/images/vogue.svg", alt: "vogue" },
  { src: "/images/fastrack.png", alt: "fastrack" },
  { src: "/images/titex.jpg", alt: "titex" },
  { src: "/images/tom star.jpg", alt: "tom" },
];

const TechLogos = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;

    let animationFrameId;
    let lastTimestamp = 0;
    const scrollSpeed = 50; // Adjust this value to change scroll speed

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;

      if (!isHovered) {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + (scrollSpeed * delta) / 1000;
          return newPosition >= scrollWidth / 2 ? 0 : newPosition;
        });
      }

      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <section className="py-8 md:py-16 bg-violet-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
          Available Brands
        </h2>
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              transition: isHovered ? "transform 0.5s ease-out" : "none",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {[...images, ...images].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8 transition-all duration-300 ease-in-out"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 filter transition-all duration-300 ease-in-out bg-white"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechLogos;
