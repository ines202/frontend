"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import CardDataStats from "../CardDataStats";
import { useAuth } from "../AuthContext";
import { Roles } from "@/types/types";
import { IoPersonOutline } from "react-icons/io5";

const Dashboard: React.FC = () => {
  const { loggedInUser, updateToken } = useAuth();

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Users" total="20">
          <IoPersonOutline size={20} className="text-purple-700 dark:text-white" />
        </CardDataStats>
        <CardDataStats title="Total Patients" total="20">
          <IoPersonOutline size={20} className="text-purple-700 dark:text-white" />
        </CardDataStats>
        {loggedInUser?.role === Roles.doctor &&
        <CardDataStats title="Patients Archived" total="20">
          <IoPersonOutline size={20} className="text-purple-700 dark:text-white" />
          </CardDataStats>
         }
        {loggedInUser?.role === Roles.admin &&
        <CardDataStats title="Total Doctors" total="20">
          <IoPersonOutline size={20} className="text-purple-700 dark:text-white" />
        </CardDataStats>
        }
        {loggedInUser?.role === Roles.admin &&
        <CardDataStats title="Doctors Archived" total="20">
          <IoPersonOutline size={20} className="text-purple-700 dark:text-white" />
          </CardDataStats>
        }
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {loggedInUser?.role === Roles.doctor && <ChartOne />}
        {loggedInUser?.role === Roles.admin && <ChartTwo />}
      </div>
    </>
  );
};

export default Dashboard;
