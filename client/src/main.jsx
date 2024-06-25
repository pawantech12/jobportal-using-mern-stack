import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { BrowseJobs } from "./pages/BrowseJobs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App element={<Home />} />,
  },
  {
    path: "/browse-jobs",
    element: <App element={<BrowseJobs />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
