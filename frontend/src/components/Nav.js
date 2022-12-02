import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../Action/User";

const Nav = () => {
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const alert = useAlert();
  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
    }

    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [error, alert, dispatch, isAuthenticated, navigate]);

  return (
    <nav className="bg-sky-900 text-white p-1 font-semibold">
      <ul className="flex justify-evenly p-1.5">
        <Link to="/">
          <HomeIcon />
        </Link>
        <Link to="/account">
          <AccountCircleIcon />
        </Link>
        <Link to="/posts">
          <MessageIcon />
        </Link>
        <Link to="/about">
          <NotificationsIcon />
        </Link>
      </ul>
      <button
        onClick={handleLogout}
        className="bg-blue-500 shadow-lg shadow-teal-500/30 rounded-lg"
      >
        {" "}
        Logout{" "}
      </button>
    </nav>
  );
};

export default Nav;
