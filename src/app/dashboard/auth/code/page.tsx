import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

interface CodeReceiveProps {
  onPreviousStep: () => void;
  onNextStep: () => void;
}

const CodeReceive: React.FC<CodeReceiveProps> = ({ onPreviousStep, onNextStep }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-full max-w-5xl">
        <Breadcrumb pageName="Forgot Password" />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full xl:block xl:w-1/2">
              <div className="px-26 py-17.5 ">
                <Link className="mb-7 inline-block" href="/">
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
                  Don&apos;t worry, we&apos;ll help you.
                </p>

                <Image
                  className="inline-block"
                  src={"/images/signin/signin.png"}
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
                      Please enter the 4 digits code sent to your email address.
                    </label>
                    <div className="mt-10 flex space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <input
                          key={i}
                          className="w-1/4 rounded-md border p-3 text-center focus:border-blue-500 focus:ring-blue-500"
                          type="number"
                          pattern="[0-9]*"
                          inputMode="numeric"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <input
                      type="submit"
                      value="Verify now"
                      className="w-full cursor-pointer rounded-lg border border-purple-700 bg-purple-700  p-4 text-white transition hover:bg-opacity-90"
                      // onClick={(e) => e.preventDefault()}
                    />
                  </div>

                  <div className="mt-6 text-center">
                    <p>
                      Didn&apos;t get any code?{" "}
                      <Link href="/signup" className="text-purple-700">
                        Resend code
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

export default CodeReceive;
