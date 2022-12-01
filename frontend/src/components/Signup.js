import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { signup } from "../Action/User";
import { Avatar } from "@mui/material";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signup(name, email, password));
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];

  //   const Reader = new FileReader();
  //   Reader.readAsDataURL(file);

  //   Reader.onload = () => {
  //     if (Reader.readyState === 2) {
  //       setAvatar(Reader.result);
  //     }
  //   };
  // };

  useEffect(() => {
    // console.log("File has been set.",avatar);

    if (error) {
      alert.error(error);
    }
  }, [error, alert]);

  return (
    <>
      <div className="grid grid-cols-1 h-screen w-full ">
        <div className="bg-sky-800 flex flex-col justify-center ">
          <form
            onSubmit={handleSubmit}
            className="max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg bg-sky-900"
          >
            {/* <div className="flex justify-center text-gray-200 py-2">
              <Avatar alt="Remy Sharp" src="" sx={{ width: 56, height: 56 }} />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={(e) => setAvatar(e.target.files[0])}
                value={""}
                className="rounded-lg mt-2 p-1 text-black"
              ></input>
            </div> */}

            <div className="text-center text-slate-50 font-semibold text-4xl">
              <h2>Sign-Up</h2>
            </div>

            <div className="flex flex-col text-gray-200 py-2">
              <label>Name</label>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg mt-2 p-1 text-black"
              ></input>
            </div>

            <div className="flex flex-col text-gray-200 py-2">
              <label>Email</label>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="rounded-lg mt-2 p-1 text-black"
              ></input>
            </div>

            <div className="flex flex-col text-gray-200 py-2">
              <label>Password</label>
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg mt-2 p-1 text-black"
              ></input>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 my-5 font-semibold text-gray-200 rounded-lg bg-teal-500 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50"
            >
              Register
            </button>

            <div className="flex justify-between text-gray-200 py-2">
              <p>Already Signed Up ?</p>
              <Link
                to="/login"
                className="w-1/4 text-center font-semibold rounded-lg bg-cyan-600 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
