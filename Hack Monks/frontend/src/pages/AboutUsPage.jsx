import React, { useState } from "react";
import teamData from "../data";
import Card from "../components/Card";

const AboutUsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamData.length) % teamData.length
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-transparent text-white px-4">
      <h1 className="text-4xl font-bold mb-6">Meet Our Team</h1>

      {/* Card Carousel */}
      <div className="w-full max-w-md">
        <Card person={teamData[currentIndex]} />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AboutUsPage;
