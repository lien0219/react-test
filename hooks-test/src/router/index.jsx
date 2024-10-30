import { createBrowserRouter } from "react-router-dom";

import ZustAand from "../views/zustand/index";
import Home from "../views/home/home";
import ZustandSplice from "../views/zustand/zustandSplice/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/zustand",
    element: <ZustAand />,
  },
  {
    path: "/zustandSplice",
    element: <ZustandSplice />,
  },
]);

export default router;
