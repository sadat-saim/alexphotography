import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import UserReview from "./common/UserReview";
import toast, { Toaster } from "react-hot-toast";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [userReview, setUserReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/review?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserReview(data);
        console.log(data);
      });
  }, []);

  const handleDeteleReview = (id) => {
    console.log(id);
    fetch(`http://localhost:4000/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const reviews = userReview.filter((r) => r._id !== id);
          console.log(reviews);
          setUserReview([...reviews]);
          toast.success("Deleted successfully");
        }
        console.log(data);
      })
      .catch((err) => toast.error(`${err.message}`));
  };

  if (!userReview || userReview.length === 0)
    return (
      <div className="w-full h-[80vh] grid place-content-center">
        No reviews found
      </div>
    );
  return (
    <div className="my-3 grid grid-cols-3 mx-3 gap-3">
      {userReview?.map((reviewObj) => (
        <UserReview
          key={reviewObj._id}
          reviewObj={reviewObj}
          handleDeteleReview={handleDeteleReview}
        ></UserReview>
      ))}
      <Toaster />
    </div>
  );
};

export default MyReview;
