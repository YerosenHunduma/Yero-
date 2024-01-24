import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../apiCalls/user";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/loadingSlice";
import { setUser } from "../redux/userSlice";

function AuthorizedRoutes({ children }) {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateToken = async () => {
    try {
      dispatch(setLoading(true));
      const response = await GetUser();
      if (response.success) {
        dispatch(setLoading(false));
        console.log("////////", response);
        dispatch(setUser(response.user));
        navigate("/");
      } else {
        dispatch(setLoading(false));
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      validateToken();
    } else {
      navigate("/login");
    }
  }, []);
  return (
    user && (
      <div>
        <div className="flex justify-between items-center bg-primary h-20 p-5">
          <h1
            className="text-white text-2xl cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            AMP
          </h1>
          <div className="bg-white py-2 px-5 rounded uppercase gap-1 items-center text-[#3B7A57]">
            <i className="ri-user-line font-bold mr-2"></i>
            <span
              className="cursor-pointer font-bold"
              onClick={() => {
                navigate("/profile");
              }}
            >
              {user.name}
            </span>
            <i
              className="ri-logout-box-r-line ml-10 font-bold"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            ></i>
          </div>
        </div>
        <div>{children}</div>
      </div>
    )
  );
}

export default AuthorizedRoutes;
