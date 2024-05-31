import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

const CodeReceive: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const handleInputChange = (index: number, value: string) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredCode = verificationCode.join("");
    // Check if the entered code matches the expected code
    const expectedCode = "1234"; // Replace with the actual expected code
    if (enteredCode === expectedCode) {
      // Code is correct, proceed to next step
      // Add logic to navigate to the next step
    } else {
      // Code is incorrect, display error message
      setError("Incorrect verification code. Please try again.");
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-full max-w-5xl">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            {/* Left side content */}
            <div className="hidden w-full xl:flex xl:w-1/2 flex-col items-center justify-center">
              <div className="px-26 py-17.5 flex flex-col items-center">
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

            {/* Right side content */}
            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <h2 className="mb-9 text-xl font-bold text-black dark:text-white sm:text-title-xl2">
                  Welcome Back!
                </h2>

                <form onSubmit={handleSubmit}>
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
                          maxLength={1}
                          value={verificationCode[i] || ""}
                          onChange={(e) => handleInputChange(i, e.target.value)}
                          required
                        />
                      ))}
                    </div>
                  </div>

                  {error && <p className="text-red-500 mb-4">{error}</p>}

                  <div className="mb-5 mt-20">
                    <button
                      type="submit"
                      className="w-full cursor-pointer rounded-lg border border-purple-700 bg-purple-700 p-4 text-white transition hover:bg-opacity-90"
                    >
                      Verify now
                    </button>
                  </div>

                  <div className="mt-6 text-center">
                    <p>
                      Didn&apos;t get any code?{" "}
                      <Link href="#" className="text-purple-700">
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
