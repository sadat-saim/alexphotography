import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./common/ServiceCard/ServiceCard";

const AllService = () => {
  const services = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-3 px-3">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default AllService;
