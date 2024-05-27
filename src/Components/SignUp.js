import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    navigate("/login");
    toast.success("Signup Success, Proceed to login");
  };
  return (
    <div>
      <div className="flex justify-center items-center text-center min-h-screen bg-violet-300">
        <div className="bg-white p-3 rounded w-full max-w-[400px]">
          <h2 className="mb-2 text-primary font-bold text-2xl">SignUp</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 flex justify-around">
              <label htmlFor="userName">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                id="userName"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 flex justify-around">
              <label htmlFor="userEmail">
                <strong>Email Id</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                id="userEmail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 flex justify-around">
              <label htmlFor="userPassword">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                id="userPassword"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className=" bg-green-600 py-1 px-3 rounded-md hover:bg-green-900 hover:text-white"
              >
                SignUp
              </button>
            </div>
          </form>
          <p className="my-2">Already have an account?</p>
          <Link
            to="/login"
            className="bg-green-600 py-1 px-3 rounded-md hover:bg-green-900 hover:text-white"
          >
            SignIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
