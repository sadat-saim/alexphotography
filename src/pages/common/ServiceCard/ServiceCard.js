import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { name, picture, details, price } = service;
  console.log(service);
  return (
    <div className="card w-full h-full bg-base-100 shadow-md">
      <figure className="px-5 pt-8">
        <PhotoProvider>
          <PhotoView src={picture}>
            <img
              src={picture}
              alt={name}
              className="rounded-xl object-cover w-full h-52"
            />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{details.slice(0, 50)}...</p>
        <p className="text-orange-400 font-semibold text-xl">${price}</p>
        <div className="card-actions">
          <button className="btn block mx-auto my-3 bg-gradient-to-tr from-orange-400 to-orange-500 border-none rounded-md">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

{
  /* <div className="aspect-square relative">
<img src={picture} className="w-full h-full object-cover" alt={name} />
<h1 className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-white font-bold uppercase text-3xl text-center bg-[rgba(0,0,0,0.6)] px-2 hover:scale-105 transition cursor-pointer">
  {name}
</h1>
</div> */
}
