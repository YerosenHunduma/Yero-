import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="p-5">
      <div>Home</div>
      <h1>{user.name}</h1>
    </div>
  );
}

export default Home;
