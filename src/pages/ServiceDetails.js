import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { details, name, picture, price } = service;
  const { names } = useContext(AuthContext);
  console.log(names);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-6">{name}</h1>
      <img src={picture} alt={name} className="w-full h-[50vh] object-cover" />
      <h2 className="text-orange-500 text-center font-semibold text-xl mt-3">
        Price: ${price}
      </h2>
      <p className="text-lg text-center font-semibold text-gray-600 my-3 px-3">
        {details}
      </p>
    </div>
  );
};

export default ServiceDetails;
