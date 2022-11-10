import React from "react";

const ReviewCard = ({ reviewObj }) => {
  const { name, review, photoURL, date } = reviewObj;

  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-200 text-gray-900">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={photoURL}
                alt={name}
                className="object-cover w-12 h-12 rounded-full bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{name}</h4>
              <span className="text-xs text-gray-700">
                {new Date(date).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-800">
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
