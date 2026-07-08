import React from "react";
import Navbar from "../components/common/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-bold text-lg">
              Total Users
            </h3>
            <h1 className="text-4xl font-bold text-indigo-600 mt-2">
              1,245
            </h1>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-bold text-lg">
              Revenue
            </h3>
            <h1 className="text-4xl font-bold text-green-600 mt-2">
              $12,400
            </h1>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-bold text-lg">
              Orders
            </h3>
            <h1 className="text-4xl font-bold text-purple-600 mt-2">
              890
            </h1>
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;