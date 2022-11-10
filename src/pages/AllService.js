import React, { useEffect, useState } from "react";
import useTitle from "../utils/useTitle";
import ServiceCard from "./common/ServiceCard/ServiceCard";

const AllService = () => {
  const [services, setServices] = useState([]);
  useTitle("All services");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/all")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen grid place-content-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl my-3 text-orange-400 text-center font-bold">
        All Services
      </h1>
      <div className="grid grid-cols-3 gap-3 px-3">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllService;
