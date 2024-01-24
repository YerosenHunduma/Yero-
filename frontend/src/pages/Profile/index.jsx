import { Tabs } from "antd";
import React from "react";
import Products from "../../components/Products/Products";

const items = [
  {
    key: "1",
    label: "Product",
    children: <Products />,
  },
  {
    key: "2",
    label: "Bid",
    children: "Bid",
  },
  {
    key: "3",
    label: "General",
    children: "General",
  },
];
function Profile() {
  return (
    <div className="p-5">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}

export default Profile;
