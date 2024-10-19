import React, { useState, useRef, useEffect } from "react";

const images = [
  { src: "/images/scolling1.jpg", alt: "HTML5" },
  { src: "/images/scolling2.jpg", alt: "CSS3" },
  { src: "/images/scolling3.jpg", alt: "JavaScript" },
  { src: "/images/scolling4.jpg", alt: "React" },
  { src: "/images/scolling5.jpg", alt: "Tailwind CSS" },
  { src: "/images/scolling6.jpg", alt: "WordPress" },
  { src: "/images/scolling7.jpg", alt: "React Native" },
  { src: "/images/scolling8.jpg", alt: "Node.js" },
  { src: "/images/scolling9.jpg", alt: "MongoDB" },
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
          Our Brands
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
                  className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 filter transition-all duration-300 ease-in-out"
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
