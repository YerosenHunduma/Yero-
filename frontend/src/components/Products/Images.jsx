import { Button, Upload, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddProduct } from "../../redux/ProductFromSlice";
import { setLoading } from "../../redux/loadingSlice";
import { uploadImage, updatedProduct } from "../../apiCalls/product";
function Images({ getProduct }) {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.productF);

  const [file, setFile] = useState(null);
  const [image, setImage] = useState(selectedProduct.image);
  const [showPreview, setShowPreview] = useState(true);

  const upload = async () => {
    try {
      dispatch(setLoading(true));
      const formData = new FormData();
      console.log("file", file);
      formData.append("file", file);
      formData.append("productId", selectedProduct._id);
      const response = await uploadImage(formData);
      dispatch(setLoading(false));
      if (response.success) {
        message.success(response.message);
        setShowPreview(false);
        setImage([...image, response.data]);
        setFile(null);
        getProduct();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoading(false));
      message.error(error.message);
    }
  };

  const deleteImage = async (img) => {
    try {
      const updatedImageArray = image.filter((image) => image !== img);
      const updatedProd = { ...selectedProduct, image: updatedImageArray };
      dispatch(setLoading(true));
      const response = await updatedProduct(selectedProduct._id, updatedProd);
      dispatch(setLoading(false));
      if (response.success) {
        message.success(response.message);
        setImage(updatedImageArray);
        getProduct();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoading(false));
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex gap-5">
        {image.map((image) => {
          return (
            <div className="flex gap-5 border border-solid border-gray-500 p-3 mb-5 items-end">
              <img
                className="h-20 w-20 object-cover"
                src={image}
                alt="avatar"
              />
              <i
                className="ri-delete-bin-6-line "
                onClick={() => {
                  deleteImage(image);
                }}
              ></i>
            </div>
          );
        })}
      </div>
      <Upload
        listType="picture"
        beforeUpload={() => false}
        onChange={(info) => {
          setFile(info.file);
          setShowPreview(true);
        }}
        showUploadList={showPreview}
      >
        <Button type="dashed">Upload</Button>
      </Upload>
      <div className="flex justify-end gap-5 mt-5">
        <Button onClick={() => dispatch(setAddProduct(false))}>Cancel</Button>
        <Button type="primary" disabled={!file} onClick={upload}>
          Upload
        </Button>
      </div>
    </div>
  );
}

export default Images;
