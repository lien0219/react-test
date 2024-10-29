import { createBrowserRouter } from "react-router-dom";

import ZustAand from "../views/zustand/index";
import Home from "../views/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/zustand",
    element: <ZustAand />,
  },
]);

export default router;
