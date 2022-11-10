import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../utils/useTitle";

const Login = () => {
  const { signin, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const loaction = useLocation();
  const [loading, setLoading] = useState(true);
  let from = loaction.state?.from?.pathname || "/";
  useTitle("Login");

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signin(email, password)
      .then((res) => {
        console.log(res.user);
        const user = res.user;
        toast.success("Logged in successfully");
        fetch("http://localhost:4000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ user: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
          })
          .catch((err) => toast.error(`${err.message}`));
        navigate(from);
      })
      .catch((err) => toast.error(`${err.message}`));
  };
  const handleGoogleSignin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Signed in successfully");
        navigate("/");
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
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignin}>
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center">Log In</h1>
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
                  Don't have an accout?
                  <Link to="/signup" className="link link-hover">
                    sign up
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-gradient-to-tr from-orange-400 to-orange-500 border-none rounded-md"
                >
                  Login
                </button>
                <hr />
              </div>
            </div>
          </form>
          <button
            onClick={handleGoogleSignin}
            className="btn btn-outline mx-8 mb-6 -mt-3"
          >
            Log in With google
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
