import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 路由
import { RouterProvider } from "react-router-dom";
import router from "./router";

// 定制主题
import "./theme.css";

// store
import { Provider } from "react-redux";
import store from "./store";

import Sum from "@/test";

const tot = Sum(1, 2);
console.log(tot);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
