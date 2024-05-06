import Login from "../page/Login";
import Article from "../page/Article";
import Layout from "../page/Layout";
import About from "../page/About";
import Board from "../page/Board";
import NotFound from "../page/NotFound";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // path: "board",
        index: true, //二级路由默认项
        element: <Board />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article/:id/:name",
    element: <Article />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
