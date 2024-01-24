import { Modal, Tabs } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddProduct } from "../../redux/ProductFromSlice";
import GeneralForm from "./GeneralForm";
import Images from "./Images";

function AddProductsFrom({ getProduct }) {
  const [selectedTab, setselectedTab] = useState("1");

  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { productForm } = useSelector((state) => state.productF);
  const { selectedProduct } = useSelector((state) => state.productF);
  useEffect(() => {
    if (selectedProduct) {
      formRef.current.setFieldsValue(selectedProduct);
    }
  });
  return (
    <Modal
      title=""
      open={productForm}
      onCancel={() => {
        dispatch(setAddProduct(false));
      }}
      centered
      width={1000}
      okText="Save"
      onOk={() => {
        formRef.current.submit();
      }}
      {...(selectedTab === "2" && { footer: false })}
    >
      <div>
        <h1 className="text-primary text-2xl text-center font-semibold uppercase">
          {selectedProduct ? "Edit Product" : "Add Product"}
        </h1>
        <Tabs
          defaultActiveKey="1"
          // activeKey={selectedTab}
          onChange={(key) => {
            setselectedTab(key);
          }}
          items={[
            {
              key: "1",
              label: "General",
              children: (
                <GeneralForm formRef={formRef} getProduct={getProduct} />
              ),
            },
            {
              key: "2",
              label: "Image",
              disabled: !selectedProduct,
              children: <Images getProduct={getProduct} />,
            },
          ]}
        />
      </div>
    </Modal>
  );
}

export default AddProductsFrom;
