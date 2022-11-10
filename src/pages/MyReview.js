import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import UserReview from "./common/UserReview";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../utils/useTitle";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [userReview, setUserReview] = useState([]);
  useTitle("My Reviews");

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
  const handleUpdateReview = (id, msg) => {
    fetch(`http://localhost:4000/review/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ msg }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount === 1) {
          const prevReviews = userReview.filter((r) => r._id !== id);
          const updatedReview = userReview.filter((r) => r._id === id);
          updatedReview[0].review = msg;
          setUserReview([...updatedReview, ...prevReviews]);
          console.log(prevReviews, "prev rev");
          console.log(updatedReview, "updated rev");
          toast.success("Updated successfully");
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
      {userReview?.map((reviewObj, idx) => (
        <UserReview
          key={reviewObj?.serviceId + idx}
          reviewObj={reviewObj}
          handleDeteleReview={handleDeteleReview}
          handleUpdateReview={handleUpdateReview}
        ></UserReview>
      ))}
      <Toaster />
    </div>
  );
};

export default MyReview;
