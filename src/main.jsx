import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { App } from "./app.jsx";
import { MainPage } from "./pages";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { signal } from "@preact/signals-react";

const message = signal("testing");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App message={message} />,
  },
  {
    path: "/main",
    element: <MainPage message={message} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={routes} />
    <ToastContainer />
  </>
);
