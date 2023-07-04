import React from "react";

const Spinner = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-10 h-10 bg-red-600 animate-ping rounded-full flex items-center justify-center relative">
        <div className="absolute inset-0 rounded-full bg-red-600 blur-xl"></div>
      </div>
    </div>
  );
};

export default Spinner;
