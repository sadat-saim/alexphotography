import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import UserReview from "./common/UserReview";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../utils/useTitle";
import { Navigate, useLocation } from "react-router-dom";

const MyReview = () => {
  const { user, signout } = useContext(AuthContext);
  const [userReview, setUserReview] = useState([]);
  useTitle("My Reviews");
  const loaction = useLocation();

  useEffect(() => {
    fetch(
      `https://alex-photography-server-sadat-saim.vercel.app/review?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signout()
            .then(() => {
              localStorage.removeItem("token");
              return (
                <Navigate to="/login" state={{ from: loaction }} replace />
              );
            })
            .catch((err) => toast.error(`${err.message}`));
        }
        return res.json();
      })
      .then((data) => {
        setUserReview(data);
      });
  }, []);

  const handleDeteleReview = (id) => {
    fetch(
      `https://alex-photography-server-sadat-saim.vercel.app/review/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const reviews = userReview.filter((r) => r._id !== id);
          setUserReview([...reviews]);
          toast.success("Deleted successfully");
        }
      })
      .catch((err) => toast.error(`${err.message}`));
  };
  const handleUpdateReview = (id, msg) => {
    fetch(
      `https://alex-photography-server-sadat-saim.vercel.app/review/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ msg }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount === 1) {
          const prevReviews = userReview.filter((r) => r._id !== id);
          const updatedReview = userReview.filter((r) => r._id === id);
          updatedReview[0].review = msg;
          setUserReview([...updatedReview, ...prevReviews]);
          toast.success("Updated successfully");
        }
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
    <div className="my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3 gap-3">
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
