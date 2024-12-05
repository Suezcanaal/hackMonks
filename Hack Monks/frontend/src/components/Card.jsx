import React from "react";

const Card = ({ person }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
      <img
        src={person.image}
        alt={person.name}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{person.name}</h2>
      <p className="text-gray-600 mb-4">{person.skills}</p>
      <div className="flex justify-center space-x-6">
        <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-blue-600 text-xl"></i>
        </a>
        <a href={person.instagram} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-pink-500 text-xl"></i>
        </a>
        <a href={person.email} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope text-red-500 text-xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
