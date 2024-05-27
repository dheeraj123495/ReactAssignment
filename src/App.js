import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import UserDataForm from "./Components/UserDataForm";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp"
import PrivateRouter from "./Components/PrivateRouter";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
      const saved = localStorage.getItem("isLoggedIn");
      return saved === "true"; 
    });
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route
          path="/login"
          element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/home"
          element={
            <PrivateRouter isLoggedIn={isLoggedIn}>
              <Home setIsLoggedIn={setIsLoggedIn} />
            </PrivateRouter>
          }
        />
        <Route
          path="/counter"
          element={
            <PrivateRouter isLoggedIn={isLoggedIn}>
              <Counter />
            </PrivateRouter>
          }
        />
        <Route
          path="/form"
          element={
            <PrivateRouter isLoggedIn={isLoggedIn}>
              <UserDataForm />
            </PrivateRouter>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
