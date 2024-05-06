import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./router";

// 定制主题
import "./theme.css";

import Sum from "@/test";

const tot = Sum(1, 2);
console.log(tot);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
