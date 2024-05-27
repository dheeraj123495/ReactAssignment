import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const UserDataForm = () => {
  const [userData, setuserData] = useState({
    userId: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [isDirty, setIsDirty] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setuserData((prevuserData) => ({
      ...prevuserData,
      userId: `user-${Date.now()}`,
    }));
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  const handleChange = (field) => (content) => {
    setuserData({ ...userData, [field]: content });
    setIsDirty(true);
  };

  const handleSubmit = () => {
    dispatch(saveUser(userData));
    setIsDirty(false);
    alert("Data saved!");
  };
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };

  const formats = ["bold", "italic", "underline", "list", "bullet"];

  return (
    <div className="bg-slate-200 h-[100vh] w-[100vw] flex flex-col justify-center items-center">
      <button
        onClick={() => navigate("/home")}
        className="absolute top-5 left-[50px] bg-slate-600 text-white py-2 px-2 rounded-md"
      >
        Go Back
      </button>
      <form className="flex flex-col w-[50vw] border-2 border-neutral-400 p-3 shadow-lg">
        <label className="text-center font-light text-2xl">Name</label>
        <ReactQuill
          value={userData.name}
          onChange={handleChange("name")}
          modules={modules}
          formats={formats}
        />
        <label className="text-center font-light text-2xl">Address</label>
        <ReactQuill
          value={userData.address}
          onChange={handleChange("address")}
          modules={modules}
          formats={formats}
        />
        <label className="text-center font-light text-2xl">Email</label>
        <ReactQuill
          value={userData.email}
          onChange={handleChange("email")}
          modules={modules}
          formats={formats}
        />
        <label className="text-center font-light text-2xl">Phone Number</label>
        <ReactQuill
          value={userData.phone}
          onChange={handleChange("phone")}
          modules={modules}
          formats={formats}
        />
        <button
          className=" bg-green-500 mt-12 px-4 py-2 mx-auto flex rounded-md font-bold"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserDataForm;
