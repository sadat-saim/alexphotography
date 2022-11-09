import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./common/ServiceCard/ServiceCard";

const AllService = () => {
  const services = useLoaderData();
  return (
    <div>
      <h1 className="text-4xl my-3 text-orange-400 text-center font-bold">
        All Services
      </h1>
      <div className="grid grid-cols-3 gap-3 px-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllService;
