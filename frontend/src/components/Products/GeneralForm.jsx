import { Col, Form, Input, Row, Checkbox, message } from "antd";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/loadingSlice";
import { addProducts, updatedProduct } from "../../apiCalls/product";
import { setAddProduct } from "../../redux/ProductFromSlice";

const additionalInfo = [
  {
    label: "Bill Available",
    name: "bill_available",
  },
  {
    label: "Warranty Available",
    name: "warranty_available",
  },
  {
    label: "Delivery Available",
    name: "delivery_available",
  },
  {
    label: "Accessories Available",
    name: "accessories_available",
  },
];

const checkBoxInitialValue = {
  bill_available: false,
  warranty_available: false,
  delivery_available: false,
  accessories_available: false,
};
const rules = [
  {
    required: true,
    message: "required!",
  },
];

function GeneralForm({ formRef, getProduct }) {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.productF);
  const { user } = useSelector((state) => state.user);

  const onFinish = async (values) => {
    try {
      dispatch(setLoading(true));
      if (selectedProduct) {
        console.log("id", selectedProduct._id);
        const response = await updatedProduct(selectedProduct._id, values);

        console.log(response);
        dispatch(setLoading(false));

        if (response.success) {
          message.success(response.message);
          dispatch(setAddProduct(false));
          getProduct();
        } else {
          message.error(response.message);
          dispatch(setAddProduct(false));
        }
      } else {
        values.seller = user._id;
        values.status = "pending";
        const response = await addProducts(values);
        console.log(response);
        dispatch(setLoading(false));
        if (response.success) {
          message.success(response.message);
          dispatch(setAddProduct(false));
          getProduct();
        } else {
          message.error(response.message);
          dispatch(setAddProduct(false));
        }
      }
    } catch (error) {
      dispatch(setLoading(false));
      message.error(error.message);
    }
  };

  return (
    <Form
      layout="vertical"
      ref={formRef}
      onFinish={onFinish}
      initialValues={checkBoxInitialValue}
    >
      <Form.Item label="Name" name="name" rules={rules}>
        <Input type="text" />
      </Form.Item>
      <Form.Item label="Description" name="description" rules={rules}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item label="Price" name="price" rules={rules}>
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Category" name="category">
              <select>
                <option value="Electronics">Electronics</option>
                <option value="Cars">Cars</option>
                <option value="Home">Home</option>
                <option value="Sport">Sport</option>
                <option value="Fashion">Fashion</option>
              </select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Age" name="age" rules={rules}>
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <div className="flex gap-10">
        {additionalInfo.map((item, index) => (
          <Form.Item
            key={index}
            label={item.label}
            name={item.name}
            valuePropName="checked"
          >
            <Checkbox />
          </Form.Item>
        ))}
      </div>
    </Form>
  );
}

export default GeneralForm;
