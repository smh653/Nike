import React from "react";

const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
    
    ${
      backgroundColor
    ? `${backgroundColor} ${borderColor} ${textColor}`
    : "bg-coral-red rounded-full text-white border-coral-red"}`}>
      {label}
      {iconUrl && (
        <img
          src="../../assets/icons/arrow-right.svg"
          alt="Arrow right Icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
