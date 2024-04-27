"use client";
import React from "react";
import VerifyCode from "@/components/VerifyCode/VerifyCode";

const VerifyCodePage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <VerifyCode />
      </div>
    </>
  );
};

export default VerifyCodePage;

