import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { App } from "./app.jsx";
import { MainPage } from "./pages";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import DropZone from "./pages/DropZone/DropZone";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/drop",
    element: <DropZone />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={routes} />
    <ToastContainer />
  </>
);
