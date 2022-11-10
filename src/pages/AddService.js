import React from "react";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../utils/useTitle";

const AddService = () => {
  useTitle("Add service");

  const handleAddService = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const picture = e.target.photoURL.value;
    const price = e.target.price.value;
    const details = e.target.details.value;
    fetch("https://alex-photography-server-sadat-saim.vercel.app/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, picture, price, details }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service created successfully");
        }
        e.target.reset();
      })
      .catch((err) => toast.error(`${err.message}`));
  };
  return (
    <div>
      <form onSubmit={handleAddService}>
        <div className="hero min-h-screen bg-base-200">
          <div className="card shadow-2xl bg-base-100 w-3/4">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name of Service</span>
                </label>
                <input
                  type="text"
                  placeholder="service name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  required
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  required
                  placeholder="price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <textarea
                  type="text"
                  name="details"
                  required
                  placeholder="details..."
                  className="textarea textarea-bordered"
                  rows="3"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-gradient-to-tr from-orange-400 to-orange-500 border-none rounded-md"
                >
                  Add Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default AddService;
