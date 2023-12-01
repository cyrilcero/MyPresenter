import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { App } from "./app.jsx";
import { MainPage } from "./pages";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import state from "./state.js";
import { createContext } from "react";

export const AppState = createContext();
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppState.Provider value={state}>
        <App />,
      </AppState.Provider>
    ),
  },
  {
    path: "/main",
    element: (
      <AppState.Provider value={state}>
        <MainPage />,
      </AppState.Provider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={routes} />
    <ToastContainer />
  </>
);
