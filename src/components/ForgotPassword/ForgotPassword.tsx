import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";
import axios, { AxiosError } from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        
        try {
            const response = await axios.post('/api/send-code', { email });
            if (response.data.success) {
                // If successful, navigate to the VerifyCode component
                // You can replace this line with your preferred navigation method
                // router.push('/VerifyCode'); 
            } else {
                // Handle error if success is false
                setError('Error: ' + response.data.error);
            }
        } catch (error) {
            // Handle network errors or other exceptions
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError; // Type assertion
                // Handle Axios errors
                setError('Axios Error: ' + axiosError.message);
                console.error('Axios Error Response:', axiosError.response);
            } else {
                // Handle other errors
                const unknownError = error as Error; // Type assertion
                setError('Error: ' + unknownError.message);
            }
        }
    };
    
    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
  
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="w-full max-w-5xl">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="flex flex-wrap items-center">
                        {/* Left Section */}
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
                                    We will send you an email to reset your password.
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

                        {/* Right Section */}
                        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
                            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                                <h2 className="mb-9 text-xl font-bold text-black dark:text-white sm:text-title-xl2">
                                    Welcome Back!
                                </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="email"
                                            className="mb-2.5 block text-center font-medium text-black dark:text-white"
                                        >
                                            Enter your email address to receive the verification code.
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="Enter your email"
                                                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
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
                                        <button
                                            type="submit"
                                            className="w-full cursor-pointer rounded-lg border border-purple-700 bg-purple-700 p-4 text-white transition hover:bg-opacity-90"
                                        >
                                            Send
                                        </button>
                                    </div>

                                    <div className="mt-6 text-center">
                                        <p>
                                            Remembered your password?{" "}
                                            <Link href="/signin" className="text-purple-700">
                                                Sign In
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                                {error && <p className="text-red-500">{error}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
