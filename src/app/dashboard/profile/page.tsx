"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Link from "next/link";
import { useAuth } from "@/components/AuthContext";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { Roles } from "@/types/types";
import { useEffect } from "react";

const Profile = () => {
  const { loggedInUser } = useAuth();
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-242.5">
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="mt-30 px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
            <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
              <div className="relative h-40 w-40 rounded-full border-4 border-purple-700 drop-shadow-2">
                {loggedInUser &&
                  loggedInUser.role === Roles.doctor &&
                  loggedInUser.doctor?.profilePicture && (
                    <Image
                      src={loggedInUser.doctor.profilePicture}
                      fill
                      sizes="100%"
                      className="absolute rounded-full object-cover p-1"
                      alt="profile"
                    />
                  )}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                {loggedInUser &&
                  (loggedInUser?.role === Roles.admin
                    ? `${loggedInUser.admin?.first_name} ${loggedInUser.admin?.last_name}`
                    : `${loggedInUser.doctor?.first_name} ${loggedInUser.doctor?.last_name}`)}
              </h3>
              <p className="font-medium">
                {loggedInUser &&
                  (loggedInUser.role === Roles.doctor
                    ? loggedInUser.doctor?.speciality
                    : "Admin")}
              </p>
              <p className="font-medium">
                {loggedInUser &&
                  loggedInUser.role === Roles.doctor &&
                  loggedInUser.doctor?.address}
              </p>
              <p className="font-medium">
                {loggedInUser &&
                  loggedInUser.role === Roles.doctor &&
                  loggedInUser.doctor?.phone}
              </p>
              

              <div className="mx-auto mt-6 max-w-180">
                <h4 className="font-semibold text-black dark:text-white">
                  About Me
                </h4>
                <p className="mt-4.5">
                  {loggedInUser &&
                    loggedInUser.role === Roles.doctor &&
                    loggedInUser.doctor?.bio}
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
