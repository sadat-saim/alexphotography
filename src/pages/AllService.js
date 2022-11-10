import React, { useEffect, useState } from "react";
import useTitle from "../utils/useTitle";
import ServiceCard from "./common/ServiceCard/ServiceCard";

const AllService = () => {
  const [services, setServices] = useState([]);
  useTitle("All services");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://alex-photography-server-sadat-saim.vercel.app/all")
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
      <h2 className="text-2xl text-center font-bold mt-10 uppercase border-b-2 pb-3">
        All Services
      </h2>
      <div className="grid grid-cols-3 gap-3 px-3">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllService;
