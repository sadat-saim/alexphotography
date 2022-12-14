import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import ReviewCard from "./common/ReviewCard";
import useTitle from "../utils/useTitle";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { details, name, picture, price, _id } = service;
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("Service Details");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://alex-photography-server-sadat-saim.vercel.app/review/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => toast.error(`${err.message}`));
  }, []);

  const handleReview = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please log in first");
    }

    const review = e.target.review.value;
    const reviewObj = {
      photoURL: user.photoURL,
      name: user.displayName,
      serviceName: name,
      review: review,
      email: user.email,
      serviceId: _id,
      date: Date.now(),
    };

    fetch(
      `https://alex-photography-server-sadat-saim.vercel.app/review?email=${user.email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewObj),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setReviews([reviewObj, ...reviews]);
          toast.success("review added successfully");
        }
      })
      .catch((err) => toast.error(`${err.message}`));
  };

  if (loading) {
    return (
      <div className="w-full h-screen grid place-content-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-6">{name}</h1>
      <PhotoProvider>
        <PhotoView src={picture}>
          <img
            src={picture}
            alt={name}
            className="w-full h-[50vh] object-cover"
          />
        </PhotoView>
      </PhotoProvider>

      <h2 className="text-orange-500 text-center font-semibold text-xl mt-3">
        Price: ${price}
      </h2>
      <p className="text-lg text-center font-semibold text-gray-600 my-3 px-3">
        {details}
      </p>
      <div>
        <div>
          {user ? (
            <form onSubmit={handleReview} className="px-3">
              <textarea
                name="review"
                className="textarea textarea-bordered block mx-auto mt-6"
                placeholder="Add a review"
                cols="45"
              ></textarea>
              <button type="submit" className="btn block mx-auto mt-3">
                post
              </button>
            </form>
          ) : (
            <p className="text-center font-semibold mt-6 ">
              Please
              <Link to="/login" className="link mx-2">
                log in
              </Link>
              to add a review
            </p>
          )}
          <h2 className="text-lg font-bold my-3 text-center">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 my-6 gap-3">
            {reviews.map((reviewObj, idx) => (
              <ReviewCard
                key={reviewObj.serviceId + idx}
                reviewObj={reviewObj}
              ></ReviewCard>
            ))}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ServiceDetails;
