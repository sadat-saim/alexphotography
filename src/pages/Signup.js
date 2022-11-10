import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../utils/useTitle";

const Signup = () => {
  const { signup, updateprofile, signout } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Sign up");

  const [loading, setLoading] = useState(true);

  const errorHandler = (err) => toast.error(`${err.message}`);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    signup(email, password)
      .then((res) => {
        toast.success("Signed up successfully");
        const info = {
          displayName: name,
          photoURL: photoURL,
        };
        updateprofile(info)
          .then(() => {
            signout()
              .then(() => {
                navigate("/login");
              })
              .catch((err) => errorHandler(err));
          })
          .catch((err) => errorHandler(err));
      })
      .catch((err) => errorHandler(err));
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
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignup}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    required
                    placeholder="photo URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    Already have an account? <Link to="/login">log in</Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-gradient-to-tr from-orange-400 to-orange-500 border-none rounded-md"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
