import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import UserReview from "./common/UserReview";

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
  if (!userReview) return <div>No reviews found</div>;
  return (
    <div className="my-3 grid grid-cols-3 mx-3 gap-3">
      {userReview.map((reviewObj) => (
        <UserReview key={reviewObj._id} reviewObj={reviewObj}></UserReview>
      ))}
    </div>
  );
};

export default MyReview;
