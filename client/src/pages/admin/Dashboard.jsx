import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "./components/Sidebar";

export const Dashboard = ({ element }) => {
  return (
    <>
      <Navbar />
      <div className="flex gap-5">
        <Sidebar />
        <div className="w-11/12 px-5">{element}</div>
      </div>
    </>
  );
};
