import React from "react";

const Slide = ({ prev, next, current, img }) => {
  return (
    <>
      <div id={`slide${current}`} className="carousel-item relative w-full">
        <img src={img} className="w-full object-cover" alt="slider" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-50">
          <a href={`#slide${prev}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute w-full h-full bg-gradient-to-tr from-orange-400 to-transparent top-0 left-0">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-6xl text-center font-bold text-white">
              Create A Memory<span className="text-yellow-300">...</span>
            </h1>
            <p className="text-md my-3 text-gray-300">
              Create a memory that you will never forget. Capture every moment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
