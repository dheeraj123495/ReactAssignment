import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignIn = ({ setIsLoggedIn }) => {
  const [loggedEmail, setEmail] = React.useState("");
  const [loggedPassword, setPassword] = React.useState("");
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loggedEmail === email && loggedPassword === password) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
      localStorage.removeItem("count");
      localStorage.removeItem("userData");
      toast.success("Login success");
      navigate("/home");
    } else {
      toast.error("User not registered, SignUp to login");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center text-center min-h-screen bg-violet-300">
        <div className="bg-white p-3 rounded w-full max-w-[400px]">
          <h2 className="mb-2 text-primary font-bold text-2xl">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 flex justify-around">
              <label htmlFor="userEmail" className="form-label">
                <strong>Email Id</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                id="userEmail"
                value={loggedEmail}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 flex justify-around">
              <label htmlFor="userPassword" className="form-label">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                value={loggedPassword}
                id="userPassword"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className=" bg-green-600 py-1 px-3 rounded-md hover:bg-green-900 hover:text-white"
              >
                Login
              </button>
            </div>
          </form>
          <p className="my-2">Don't have an account?</p>
          <Link
            to="/"
            className="bg-green-600 py-1 px-3 rounded-md hover:bg-green-900 hover:text-white"
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
