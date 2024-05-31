"use client";
import Image from "next/image";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { useAuth } from "@/components/AuthContext";
import { BsBriefcase, BsPerson } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { IoCallOutline } from "react-icons/io5";
import { LuClipboardEdit } from "react-icons/lu";
import { Roles } from "@/types/types";
import ImageUpload from "@/components/ImageUpload";
import { UploadFolders } from "@/api/upload";
import { useUpdateDoctor } from "@/api/doctor";
import { useUpdateAdmin } from "@/api/admin";
import { useState, useEffect } from "react";
import DocumentUpload from "@/components/DocumentUpload";
import { toast } from "react-toastify";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const Settings = () => {
  const { loggedInUser, updateToken } = useAuth();

  const [newDoctor, setNewDoctor] = useState({
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    speciality: '',
    address: '',
    bio: '',
    profilePicture: '',
    document: '',
    password: '',
    role: '',
    isDisabled: false,
  });


  const [newAdmin, setNewAdmin] = useState({
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    phone: ''
  });

  const [showOldImage, setShowOldImage] = useState(true);
  const [showOldDocument, setShowOldDocument] = useState(true);

  // Initialize state with loggedInUser data
  useEffect(() => {
    if (loggedInUser?.role === Roles.doctor && loggedInUser?.doctor) {
      setNewDoctor({ ...loggedInUser.doctor });
    } else if (loggedInUser?.role === Roles.admin && loggedInUser?.admin) {
      setNewAdmin({ ...loggedInUser.admin });
    }
  },
    [loggedInUser]);

  // Mutations
  const { mutateAsync: updateDoctor, isPending: isDoctorPending } = useUpdateDoctor();
  const { mutateAsync: updateAdmin, isPending: isAdminPending } = useUpdateAdmin();

  // Handlers
  const handleSaveChanges = async () => {
    try {
      if (loggedInUser.role === Roles.doctor && newDoctor) {
        const { token } = await updateDoctor(newDoctor);
        await updateToken(token);
        toast.success("Doctor profile updated successfully");
      } else if (loggedInUser.role === Roles.admin && newAdmin) {
        const { token } = await updateAdmin(newAdmin);
        await updateToken(token);
        toast.success("Admin profile updated successfully");
      }
      setShowOldDocument(true);
      setShowOldImage(true);
    } catch (error) {
      console.log (error)
      toast.error(error);
    }
  };


  if (!loggedInUser) {
    return <div>Loading...</div>; // or some other loading indicator
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-3 grid-rows-3 gap-x-8 gap-y-10">
          <div className="col-span-2 row-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Personal Information
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-4.5 top-4">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <BsPerson className="text-gray-400" size={20} />
                          </div>
                        </span>
                        <input
                          className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none disabled:bg-gray dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder={
                            loggedInUser.role === Roles.doctor
                              ? loggedInUser.doctor?.first_name
                              : loggedInUser.admin?.first_name
                          }
                          defaultValue={
                            loggedInUser.role === Roles.doctor
                              ? loggedInUser.doctor?.first_name
                              : loggedInUser.admin?.first_name
                          }
                          value={
                            loggedInUser.role === Roles.doctor
                              ? newDoctor.first_name
                              : newAdmin.first_name
                          }
                          onChange={(e) => {
                            if (loggedInUser.role === Roles.doctor) {
                              setNewDoctor({
                                ...newDoctor,
                                first_name: e.target.value,
                              });
                            } else if (loggedInUser.role === Roles.admin) {
                              setNewAdmin({
                                ...newAdmin,
                                first_name: e.target.value,
                              });
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-4.5 top-4">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <BsPerson className="text-gray-400" size={20} />
                          </div>
                        </span>
                        <input
                          className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none disabled:bg-gray dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder={
                            loggedInUser.role === Roles.doctor
                              ? loggedInUser.doctor?.last_name
                              : loggedInUser.admin?.last_name
                          }
                          defaultValue={
                            loggedInUser.role === Roles.doctor
                              ? loggedInUser.doctor?.last_name
                              : loggedInUser.admin?.last_name
                          }
                          value={
                            loggedInUser.role === Roles.doctor
                              ? newDoctor.last_name
                              : newAdmin.last_name
                          }
                          onChange={(e) => {
                            if (loggedInUser.role === Roles.doctor) {
                              setNewDoctor({
                                ...newDoctor,
                                last_name: e.target.value,
                              });
                            } else if (loggedInUser.role === Roles.admin) {
                              setNewAdmin({
                                ...newAdmin,
                                last_name: e.target.value,
                              });
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="emailAddress"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute left-4.5 top-4">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <FaRegEnvelope className="text-gray-400" size={20} />
                          </div>
                        </span>
                        <input
                          className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none disabled:bg-gray dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                          type="email"
                          name="emailAddress"
                          id="emailAddress"
                          placeholder={
                            loggedInUser.role === Roles.doctor
                              ? loggedInUser.doctor?.email
                              : loggedInUser.admin?.email
                          }
                          defaultValue={
                            loggedInUser.role === Roles.doctor
                              ? loggedInUser.doctor?.email
                              : loggedInUser.admin?.email
                          }
                          value={
                            loggedInUser.role === Roles.doctor
                              ? newDoctor.email
                              : newAdmin.email
                          }
                          onChange={(e) => {
                            if (loggedInUser.role === Roles.doctor) {
                              setNewDoctor({
                                ...newDoctor,
                                email: e.target.value,
                              });
                            } else if (loggedInUser.role === Roles.admin) {
                              setNewAdmin({
                                ...newAdmin,
                                email: e.target.value,
                              });
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute left-4.5 top-4">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <IoCallOutline className="text-gray-400" size={20} />
                          </div>
                        </span>
                        <input
                          className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none disabled:bg-gray dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder={
                            loggedInUser.role === Roles.doctor
                              ? loggedInUser.doctor?.phone
                              : loggedInUser.admin?.phone
                          }
                          defaultValue={
                            loggedInUser.role === Roles.doctor
                              ? loggedInUser.doctor?.phone
                              : loggedInUser.admin?.phone
                          }
                          value={
                            loggedInUser.role === Roles.doctor
                              ? newDoctor.phone
                              : newAdmin.phone
                          }
                          onChange={(e) => {
                            if (loggedInUser.role === Roles.doctor) {
                              setNewDoctor({
                                ...newDoctor,
                                phone: e.target.value,
                              });
                            } else if (loggedInUser.role === Roles.admin) {
                              setNewAdmin({
                                ...newAdmin,
                                phone: e.target.value,
                              });
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {loggedInUser?.role === Roles.doctor && (
                    <>
                      <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="speciality"
                          >
                            Speciality
                          </label>
                          <div className="relative">
                            <span className="absolute left-4.5 top-4">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <BsBriefcase className="text-gray-200" size={20} />
                              </div>
                            </span>
                            <input
                              className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none disabled:bg-gray dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                              type="text"
                              name="speciality"
                              id="speciality"
                              placeholder={loggedInUser.doctor?.speciality}
                              defaultValue={loggedInUser.doctor?.speciality}
                              value={newDoctor?.speciality}
                              onChange={(e) => {
                                setNewDoctor({
                                  ...newDoctor,
                                  speciality: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="Address"
                          >
                            Address
                          </label>
                          <div className="relative">
                            <span className="absolute left-4.5 top-4">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <GiPositionMarker className="text-gray-400" size={20} />
                              </div>
                            </span>
                            <input
                              className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none disabled:bg-gray dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                              type="text"
                              name="Address"
                              id="Address"
                              placeholder={loggedInUser.doctor?.address}
                              defaultValue={loggedInUser.doctor?.address}
                              value={newDoctor?.address}
                              onChange={(e) => {
                                setNewDoctor({
                                  ...newDoctor,
                                  address: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-5.5">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="bio"
                        >
                          Bio
                        </label>
                        <div className="relative">
                          <span className="absolute left-4.5 top-4">
                            <LuClipboardEdit size={20} />
                          </span>
                          <textarea
                            className="w-full rounded border border-stroke py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none disabled:bg-gray dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-purple-700"
                            name="bio"
                            id="bio"
                            rows={6}
                            placeholder="Write your bio here"
                            value={newDoctor?.bio}
                            onChange={(e) => {
                              setNewDoctor({
                                ...newDoctor,
                                bio: e.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded bg-purple-700 px-6 py-2 font-medium text-gray hover:bg-opacity-90 disabled:bg-purple-400"
                      type="button"
                      onClick={handleSaveChanges}
                      disabled={isDoctorPending || isAdminPending}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {loggedInUser?.role === Roles.doctor && (
            <div className="col-span-1 row-span-1">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">Your Photo</h3>
                </div>
                <div className="p-7">
                  <div>
                    <ImageUpload
                      uploadFolder={UploadFolders["doctor/images"]}
                      uploadedImageURL={(imageURL) => {
                        setNewDoctor({
                          ...newDoctor,
                          profilePicture: imageURL,
                        });
                        setShowOldImage(false);
                      }}
                    />
                    {showOldImage && (
                      <div className="mb-4 flex items-center justify-center">
                        <div className="relative h-20 w-20 rounded-full border-2 border-purple-700 drop-shadow-2">
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {loggedInUser?.role === Roles.doctor && (
            <div className="col-span-1 row-span-1">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">Your Document</h3>
                </div>
                <div className="p-7">
                  {/* <div>
                    <DocumentUpload
                      uploadFolder={UploadFolders["doctor/documents"]}
                      uploadedDocumentURL={(documentURL) => {
                        setNewDoctor({
                          ...newDoctor,
                          document: documentURL,
                        });
                        setShowOldDocument(false);
                      }}
                      hideSuccess={showOldDocument}
                    />
                  </div> */}
                  {showOldDocument && loggedInUser?.role === Roles.doctor && (
                    <div className="">
                      <div className="flex items-center justify-center gap-2 text-purple-700">
                        <a
                          href={loggedInUser.doctor?.document}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base font-medium hover:underline dark:text-purple-400"
                        >
                          Download Document
                        </a>
                        <HiOutlineDocumentArrowDown className="text-xl" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
