import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../utils/useTitle";
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
  useTitle("Home");

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
      <h2 className="text-2xl text-center font-bold mt-10 uppercase border-b-2 pb-3">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <Link to="/services">
        <button className="btn block mx-auto my-3 bg-gradient-to-tr from-orange-400 to-orange-500 border-none rounded-md">
          See all services
        </button>
      </Link>
      <div>
        <h2 className="text-2xl text-center font-bold mt-10 uppercase border-b-2 pb-3">
          Gallery
        </h2>
        <section className="py-6">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://images.pexels.com/photos/1573007/pexels-photo-1573007.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://images.pexels.com/photos/1024968/pexels-photo-1024968.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="w-full dark:bg-gray-500 cta">
          <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1 className=" text-3xl md:text-4xl lg:text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
              Find out about events and other news
            </p>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="example@email.com"
                className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
              />
              <button
                type="button"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-gradient-to-tr text-white from-orange-400 to-orange-500 border-none"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
