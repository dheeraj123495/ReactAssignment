import React, { useState, useEffect } from "react";
import { animated, useSpring, easings } from "react-spring";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const [bgLevel, setBgLevel] = useState(count);
  const navigate = useNavigate();

  const backgroundColor = useSpring({
    backgroundColor: `rgba(0, 150, 136, ${bgLevel / 100})`,
    config: {
      duration: 1000,
      easing: easings.easeInOut,
    },
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
    setBgLevel(count);
  }, [count]);

  return (
    <animated.div style={{ ...backgroundColor, height: "100vh" }} className="">
      <div className="flex flex-col items-center">
        <div className="mt-[40vh]">
          <h1 className="text-2xl font-serif">Counter: {count}</h1>
        </div>
        <div className="flex gap-x-2 mt-2">
          <button
            className=" bg-slate-900 text-white px-2 py-2 rounded-lg"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className=" bg-slate-900 text-white px-2 py-2 rounded-lg"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button
            className=" bg-slate-900 text-white px-2 py-2 rounded-lg"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
        <div className="absolute top-5 left-[50px] bg-slate-600 text-white py-2 px-4 rounded-md">
          <button onClick={() => navigate("/home")}>Back</button>
        </div>
      </div>
    </animated.div>
  );
};

export default Counter;
