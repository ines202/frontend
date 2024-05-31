"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const ResetPassword = () => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to manage confirm password visibility

  const handleResetPassword = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    // Add your reset password logic here
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-full max-w-5xl">
        <Breadcrumb pageName="Reset password" />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full xl:flex xl:w-1/2 flex-col items-center justify-center">
              <div className="px-26 py-17.5 flex flex-col items-center">
                <Link href="/">
                  <Image
                    className="hidden dark:block"
                    src="/images/logo/logo.png"
                    alt="Logo"
                    width={130}
                    height={32}
                  />
                  <Image
                    className="dark:hidden"
                    src="/images/logo/logo-dark.png"
                    alt="Logo"
                    width={130}
                    height={32}
                  />
                </Link>

                <p className="text-center 2xl:px-10">
                  Don&apos;t worry, we&apos;ll help you.
                </p>
                <Image
                  className="inline-block"
                  src="/images/signin/signin.png"
                  alt="signin"
                  width={400}
                  height={800}
                />
              </div>
            </div>

            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <h2 className="mb-9 text-xl font-bold text-black dark:text-white sm:text-title-xl2">
                  Welcome Back!
                </h2>

                <form>
                  {/* Password field */}
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Please enter your new password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"} // Toggle input type
                        placeholder="6+ Characters, 1 Capital letter"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      {/* Toggle button for password visibility */}
                      <span
                        className="absolute right-4 top-4 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>

                  {/* Confirm password field */}
                  <div className="mb-6">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Confirm password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"} // Toggle input type
                        placeholder="6+ Characters, 1 Capital letter"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      {/* Toggle button for confirm password visibility */}
                      <span
                        className="absolute right-4 top-4 cursor-pointer"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>

                  <div className="mb-5">
                    <input
                      type="submit"
                      value="Reset"
                      onClick={handleResetPassword}
                      className="w-full cursor-pointer rounded-lg border border-purple-700 bg-purple-700 p-4 text-white transition hover:bg-opacity-90"
                    />
                  </div>

                  <div className="mt-6 text-center">
                    <p>
                     Go to {" "}
                      <Link href="/signin" className="text-purple-700">
                        Sign In
                      </Link>
                    </p>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
