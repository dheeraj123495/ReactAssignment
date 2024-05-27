import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Home = ({ setIsLoggedIn }) => {
  const count = localStorage.getItem("count") | 0;
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(count);
  console.log(userData);
  const navigate = useNavigate();
  function logOutHandler() {
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.reload();
    toast.error("Logged Out");
  }
  function counterHandler() {
    navigate("/counter");
  }
  return (
    <div className="flex flex-col">
      <div>
        <p className="text-center py-3 bg-pink-300 text-white text-2xl font-bold">
          DashBoard - Displaying the count and user profile
        </p>
      </div>
      <div className="flex w-12/12 h-[80vh] justify-center gap-5">
        <div className="text-center mt-10 w-6/12 h-[50vh] shadow-lg">
          {count === 0 ? (
            <div>
              <p className="text-2xl">
                Counter is not started, Click below to navigate to counter page
              </p>
              <button
                className="px-3 py-2 bg-violet-500 text-white rounded-md mt-2 text-1xl"
                onClick={counterHandler}
              >
                Counter
              </button>
            </div>
          ) : (
            <div>
              <div className="flex justify-center">
                <label className="text-2xl">Counter Value : </label>
                <p className="text-2xl ml-1">{count}</p>
              </div>
              <div>
                <p>Click below to reset the counter</p>
                <button
                  className="px-3 py-2 bg-violet-500 text-white rounded-md mt-2 text-1xl"
                  onClick={counterHandler}
                >
                  Reset Counter
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="mt-10 flex flex-col items-center w-6/12 h-[50vh] shadow-lg">
          <h2 className=" border-y-4 border-neutral-700 text-3xl mb-2">
            User Details
          </h2>
          {userData === null ? (
            <div className="text-center">
              <p className="text-red-600 text-2xl">No User Data Found</p>
              <button
                className=" bg-purple-500 py-2 px-2 rounded-md mt-2 mb-2"
                onClick={() => navigate("/form")}
              >
                Add User Info
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center w-[100%] h-[100%]">
              <div className="flex w-[50%] h-[50%] flex-col gap-y-3 bg-pink-200 p-3 mt-2 rounded-md justify-center items-center">
                <div className="flex flex-row gap-x-3">
                  <label>
                    <strong>Name:</strong>
                  </label>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: userData.name,
                    }}
                  />
                </div>
                <div className="flex flex-row gap-x-3">
                  <label>
                    <strong>Address:</strong>
                  </label>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: userData.address,
                    }}
                  />
                </div>
                <div className="flex flex-row gap-x-3">
                  <label>
                    <strong>Email:</strong>
                  </label>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: userData.email,
                    }}
                  />
                </div>
                <div className="flex flex-row gap-x-3">
                  <label>
                    <strong>Phone Number:</strong>
                  </label>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: userData.phone,
                    }}
                  />
                </div>
              </div>
              <button
                className=" bg-purple-500 py-2 px-2 rounded-md mt-2 mb-2"
                onClick={() => navigate("/form")}
              >
                Update Profile
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={logOutHandler}
          className="bg-red-600 text-white text-2xl px-2 py-2 rounded-md"
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Home;
