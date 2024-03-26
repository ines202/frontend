"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useAuth } from "@/components/AuthContext";
import { FaRegEnvelope } from "react-icons/fa";
import clsx from "clsx";

const SignIn: React.FC = () => {
  const { loggedInUser, login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-full max-w-5xl">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full xl:block xl:w-1/2">
              <div className="px-26  ">
                <Link className="mb-7 mt-10 inline-block" href="/">
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
                <p className="text-center 2xl:px-10">
                  Enter your personal details and start journey with us.
                </p>
                <Image
                  className=" mb-9"
                  src={"/images/signin/signup.png"}
                  alt="signin"
                  width={400}
                  height={800}
                />
              </div>
            </div>

            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <h2 className="mb-9 whitespace-nowrap text-xl font-bold text-black dark:text-white sm:text-title-xl2   ">
                  Welcome to<span className="ms-2 text-purple-700">Doolab</span>
                  Care
                </h2>

                <form>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

                  <div className="mb-6">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="6+ Characters, 1 Capital letter"
                        className="required w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input  dark:focus:border-purple-700"
                      />
                    </div>
                    <div>
                      <Link
                        href="/dashboard/auth/forgotpassword"
                        className="ms-60 text-purple-700"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <div className="mb-5">
                    <input
                      type="submit"
                      value={loading ? "Signing in..." : "Sign In"}
                      onClick={(e) => {
                        e.preventDefault();
                        login(email, password);
                      }}
                      className={clsx(
                        "w-full cursor-pointer rounded-lg border border-purple-700 bg-purple-700  p-4 text-white transition hover:bg-opacity-90",
                        {
                          "opacity-50": loading,
                          "pointer-events-none": loading,
                        },
                      )}
                      disabled={loading}
                    />
                  </div>

                  <div className="mt-6 text-center">
                    <p>
                      Don’t have any account?{" "}
                      <Link
                        href="/dashboard/auth/signup"
                        className="text-purple-700"
                      >
                        Sign Up
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

export default SignIn;
