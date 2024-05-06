import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Sum from "@/test";

const tot = Sum(1, 2);
console.log(tot);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
