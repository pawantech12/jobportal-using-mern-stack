import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { BrowseJobs } from "./pages/BrowseJobs.jsx";
import { JobDetails } from "./pages/JobDetails.jsx";
import BrowseCompany from "./pages/BrowseCompany.jsx";
import CompanyDetails from "./pages/CompanyDetails.jsx";
import { Blog } from "./pages/Blog.jsx";
import { SingleBlog } from "./pages/SingleBlog.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";
import { ApplyJob } from "./pages/ApplyJob.jsx";
import { Dashboard } from "./pages/admin/Dashboard.jsx";
import { Bookmark } from "./pages/admin/pages/Bookmark.jsx";
import { Application } from "./pages/admin/pages/Application.jsx";
import { Profile } from "./pages/admin/pages/Profile.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import { AuthProvider } from "./stores/auth.jsx";
import { StudentAdmin } from "./pages/admin/pages/StudentAdmin.jsx";
import JobPostsList from "./pages/admin/pages/JobPostsList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App element={<Home />} />,
  },
  {
    path: "/browse-jobs",
    element: <App element={<BrowseJobs />} />,
  },
  {
    path: "/browse-company",
    element: <App element={<BrowseCompany />} />,
  },
  {
    path: "/job-details",
    element: <App element={<JobDetails />} />,
  },
  {
    path: "/apply-job",
    element: <App element={<ApplyJob />} />,
  },
  {
    path: "/company-details",
    element: <App element={<CompanyDetails />} />,
  },
  {
    path: "/blogs",
    element: <App element={<Blog />} />,
  },
  {
    path: "/single-blog",
    element: <App element={<SingleBlog />} />,
  },
  {
    path: "/contact-us",
    element: <App element={<ContactUs />} />,
  },
  {
    path: "/register",
    element: <App element={<Register />} />,
  },
  {
    path: "/login",
    element: <App element={<Login />} />,
  },
  {
    path: "/dashboard",
    element: <Dashboard element={<StudentAdmin />} />,
  },
  {
    path: "/dashboard/bookmark",
    element: <Dashboard element={<Bookmark />} />,
  },
  {
    path: "/dashboard/application",
    element: <Dashboard element={<Application />} />,
  },
  {
    path: "/dashboard/profile",
    element: <Dashboard element={<Profile />} />,
  },
  {
    path: "/dashboard/job-posts",
    element: <Dashboard element={<JobPostsList />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
