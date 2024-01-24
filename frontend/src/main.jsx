import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#000000",
            colorPrimaryHover: "gray",
          },
        },
        token: {
          borderRadius: "2px",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);
