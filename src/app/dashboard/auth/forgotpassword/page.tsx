"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { FaRegEnvelope } from "react-icons/fa";

const ForgotPassword: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-full max-w-5xl">
        <Breadcrumb pageName="Forgot Password" />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full xl:block xl:w-1/2">
              <div className="px-26 py-17.5">
                <Link href="/">
                  <Image
                    className="hidden dark:block"
                    src={"/images/logo/logo.png"}
                    alt="Logo"
                    width={130}
                    height={32}
                  />
                  <Image
                    className="dark:hidden"
                    src={"/images/logo/logo-dark.png"}
                    alt="Logo"
                    width={130}
                    height={32}
                  />
                </Link>

                <p className="mt-10 text-center 2xl:px-10">
                  we will send you an email to reset your password.
                </p>
                <Image
                  className="inline-block"
                  src={"/images/signin/signup.png"}
                  alt="signin"
                  width={400}
                  height={800}
                />
              </div>
            </div>

            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <h2 className="mb-9 text-xl font-bold text-black dark:text-white sm:text-title-xl2   ">
                  Welcome Back!
                </h2>
                <form>
                  <div className="mb-4">
                    <label className="mb-2.5 block text-center font-medium text-black dark:text-white">
                      Enter your email address to receive the verification code.
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      <span className="absolute right-4 top-4">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <FaRegEnvelope className="text-gray-200" size={20} />
                        </div>
                      </span>
                    </div>
                  </div>

                  <div className="mb-5">
                    <input
                      type="submit"
                      value="Send "
                      className="w-full cursor-pointer rounded-lg border border-purple-700 bg-purple-700  p-4 text-white transition hover:bg-opacity-90"
                      onClick={(e) => e.preventDefault()}
                    />
                  </div>

                  <div className="mt-6 text-center">
                    <p>
                      Remembered your password?{" "}
                      <Link href="/signup" className="text-purple-700">
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

export default ForgotPassword;
