import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "./common/ServiceCard/ServiceCard";
import Slide from "./common/Slide";

//slider imgae url
const slider = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
];

const Home = () => {
  const services = useLoaderData();

  console.log(services);
  return (
    <div>
      <div className="carousel w-full h-[100vh] relative">
        {slider.map((img, i) => {
          if (i === slider.length - 1) {
            return (
              <Slide
                prev={i - 1}
                next={0}
                current={i}
                img={img}
                key={img}
              ></Slide>
            );
          } else if (i === 0) {
            return (
              <Slide
                prev={slider.length - 1}
                next={i + 1}
                current={i}
                img={img}
                key={img}
              ></Slide>
            );
          }
          return (
            <Slide
              prev={i - 1}
              next={i + 1}
              current={i}
              img={img}
              key={img}
            ></Slide>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-3 px-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <Link to="/services">
        <button className="btn block mx-auto my-3 bg-gradient-to-tr from-orange-400 to-orange-500 border-none rounded-md">
          See all services
        </button>
      </Link>
    </div>
  );
};

export default Home;
