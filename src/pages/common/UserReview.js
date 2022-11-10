import React, { useState } from "react";

const UserReview = ({ reviewObj, handleDeteleReview, handleUpdateReview }) => {
  const { name, review, photoURL, date, _id } = reviewObj;
  const [msg, setMsg] = useState("");
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
        <span className="my-3 flex justify-between pt-3">
          <label htmlFor={_id} className="btn btn-circle">
            ✍️
          </label>
          <button
            className="btn btn-circle"
            onClick={() => handleDeteleReview(_id)}
          >
            🗑️
          </button>
        </span>
      </div>
      <input type="checkbox" id={_id} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit review</h3>
          <textarea
            className="textarea textarea-bordered mt-3 w-full"
            onChange={(e) => setMsg(e.target.value)}
            defaultValue={review}
            placeholder="Edit review"
          ></textarea>
          <div className="modal-action">
            <label
              onClick={() => handleUpdateReview(_id, msg)}
              htmlFor={_id}
              className="btn"
            >
              Post
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
