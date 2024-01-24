import { Button, Table, message } from "antd";
import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setAddProduct, setEditProduct } from "../../redux/ProductFromSlice";
import AddProductsFrom from "./AddProductsFrom";
import { deleteProduct, getProducts } from "../../apiCalls/product";
import { setProduct } from "../../redux/productSlice";
import { setLoading } from "../../redux/loadingSlice";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { productForm } = useSelector((state) => state.productF);

  const getProduct = async () => {
    dispatch(setLoading(true));
    const response = await getProducts();
    dispatch(setLoading(false));
    if (response.success) {
      dispatch(setProduct(response.products));
    } else {
      dispatch(setLoading(false));
      message.error(response.message);
    }
  };

  const deleteProd = async (id) => {
    try {
      dispatch(setLoading(true));
      const response = await deleteProduct(id);
      dispatch(setLoading(true));
      if (response.success) {
        dispatch(setLoading(false));
        message.success(response.message);
        getProduct();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoading(false));
      message.error(error.message);
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Description", dataIndex: "description" },
    { title: "Price", dataIndex: "price" },
    { title: "Category", dataIndex: "category" },
    { title: "Age", dataIndex: "age" },
    { title: "Status", dataIndex: "status" },
    {
      title: "Added Date",
      dataIndex: "createdAt",
      render: (text, record) => {
        return moment(record.createdAt).format("DD-MM-YYYY HH:mm");
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex gap-5">
            <i
              className="ri-delete-bin-6-line"
              onClick={() => {
                deleteProd(record._id);
              }}
            ></i>
            <i
              className="ri-edit-2-fill"
              onClick={() => {
                dispatch(setEditProduct(record)), dispatch(setAddProduct(true));
              }}
            ></i>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div className="flex justify-end mb-3">
        <Button
          onClick={() => {
            dispatch(setEditProduct(null));
            dispatch(setAddProduct(true));
          }}
        >
          Add Product
        </Button>
      </div>
      <Table columns={columns} dataSource={products} />
      {productForm && <AddProductsFrom getProduct={getProduct} />}
    </div>
  );
}

export default Products;
