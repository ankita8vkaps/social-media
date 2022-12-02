import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { login } from "../Action/User";

const Login = () => {
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const alert = useAlert();
  let navigate = useNavigate();

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formdata.email,formdata.password))
  };

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    // if(message){
    //   alert.success(message);
    // }
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [error, alert, dispatch, isAuthenticated, navigate]);

  return (
    <>
      <div className="grid grid-cols-1 h-screen w-full ">
        <div className="bg-sky-800 flex flex-col justify-center ">
          <form
            onSubmit={handleSubmit}
            className="max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg bg-sky-900"
          >
            <div className="text-center text-slate-50 font-semibold text-4xl">
              <h2>Login</h2>
            </div>

            <div className="flex flex-col text-gray-200 py-2">
              <label>Email</label>
              <input
                name="email"
                value={formdata.email}
                onChange={handleChange}
                className="rounded-lg mt-2 p-1 text-black"
                type="email"
              ></input>
            </div>

            <div className="flex flex-col text-gray-200 py-2">
              <label>Password</label>
              <input
                name="password"
                value={formdata.password}
                onChange={handleChange}
                className="rounded-lg mt-2 p-1 text-black"
                type="password"
              ></input>
            </div>

            <button className="w-full py-2 my-5 rounded-lg font-semibold text-gray-200 bg-teal-500 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
