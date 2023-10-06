import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logindata, remove } from "../features/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();

  const { user, isloading } = useSelector(
    (state) => state.auth
  );

  
  const logoutuser = () => {
    localStorage.removeItem("user");
    dispatch(remove());
  };

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(logindata(formData));

    setformData({
      email: "",
      password: "",
    });
  };

  if (user) {
    const name = user.name;
    return (
      <div className="auth full">
        <h1>Hello {name} </h1>
        <h1>Allready Signed in...</h1>
        <button className="btn btn-danger" onClick={logoutuser}>log out</button>
      </div>
    );
  }
  if (isloading) {
    return (
      <div className="d-flex align-items-center justify-content-center full">
        <div>
          <svg
            height="108px"
            width="108px"
            viewBox="0 0 128 128"
            className="loader"
          >
            <defs>
              <clipPath id="loader-eyes">
                <circle
                  transform="rotate(-40,64,64) translate(0,-56)"
                  r="8"
                  cy="64"
                  cx="64"
                  className="loader__eye1"
                ></circle>
                <circle
                  transform="rotate(40,64,64) translate(0,-56)"
                  r="8"
                  cy="64"
                  cx="64"
                  className="loader__eye2"
                ></circle>
              </clipPath>
              <linearGradient y2="1" x2="0" y1="0" x1="0" id="loader-grad">
                <stop stopColor="#000" offset="0%"></stop>
                <stop stopColor="#fff" offset="100%"></stop>
              </linearGradient>
              <mask id="loader-mask">
                <rect
                  fill="url(#loader-grad)"
                  height="128"
                  width="128"
                  y="0"
                  x="0"
                ></rect>
              </mask>
            </defs>
            <g
              strokeDasharray="175.93 351.86"
              strokeWidth="12"
              strokeLinecap="round"
            >
              <g>
                <rect
                  clipPath="url(#loader-eyes)"
                  height="64"
                  width="128"
                  fill="hsl(193,90%,50%)"
                ></rect>
                <g stroke="hsl(193,90%,50%)" fill="none">
                  <circle
                    transform="rotate(180,64,64)"
                    r="56"
                    cy="64"
                    cx="64"
                    className="loader__mouth1"
                  ></circle>
                  <circle
                    transform="rotate(0,64,64)"
                    r="56"
                    cy="64"
                    cx="64"
                    className="loader__mouth2"
                  ></circle>
                </g>
              </g>
              <g mask="url(#loader-mask)">
                <rect
                  clipPath="url(#loader-eyes)"
                  height="64"
                  width="128"
                  fill="hsl(223,90%,50%)"
                ></rect>
                <g stroke="hsl(223,90%,50%)" fill="none">
                  <circle
                    transform="rotate(180,64,64)"
                    r="56"
                    cy="64"
                    cx="64"
                    className="loader__mouth1"
                  ></circle>
                  <circle
                    transform="rotate(0,64,64)"
                    r="56"
                    cy="64"
                    cx="64"
                    className="loader__mouth2"
                  ></circle>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  return (
    <form className="w-50 m-auto full" onSubmit={handlesubmit}>
      <div className="m-4">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          placeholder="Enter your Email"
          className="form-control m-2"
        />
        <input
          name="password"
          value={password}
          onChange={handleChange}
          type="password"
          placeholder="Enter your Password"
          className="form-control m-2"
        />
        <button className="mb-3 btn btn-success w-100">Sign In</button>
        <span className="mt-3">
          New user? <Link to="/profile">Sign Up</Link>{" "}
        </span>
      </div>
    </form>
  );
};

export default Login;
