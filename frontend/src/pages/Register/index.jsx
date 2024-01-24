import { Button, Form, Input, message } from "antd";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Divider from "../../components/Divider";
import { RegisterUser } from "../../apiCalls/user";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/loadingSlice";

const rules = [
  {
    required: true,
    message: "required!",
  },
];
function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(setLoading(true));
      const response = await RegisterUser(values);
      if (response.success) {
        dispatch(setLoading(false));
        message.success(response.message);
        navigate("/login");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(setLoading(false));
      message.error(error.message);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="bg-primary h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded w-[450px]">
        <h2 className="text-center">
          AMP <span className="text-gray-400  font-bold">REGISTER</span>
        </h2>
        <Divider />
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name:" name="name" rules={rules}>
            <Input placeholder="Name"></Input>
          </Form.Item>
          <Form.Item label="Email:" name="email" rules={rules}>
            <Input type="email" placeholder="Email"></Input>
          </Form.Item>
          <Form.Item label="Password:" name="password" rules={rules}>
            <Input type="password" placeholder="Password"></Input>
          </Form.Item>
          <Button type="primary" htmlType="submit" block className="mt-3">
            Register
          </Button>
          <div className="text-center mt-5">
            <span className="mr-2 text-gray-500">
              Already have an account ?
            </span>
            <Link to="/login">Login</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
