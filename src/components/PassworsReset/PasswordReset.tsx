import CodeReceive from "@/app/dashboard/auth/code/page";
import ForgotPassword from "@/app/dashboard/auth/forgotpassword/page";
import ResetPassword from "@/app/dashboard/auth/resetpassword/page";
import React, { useState } from "react";


const PasswordReset: React.FC = () => {
  const [step, setStep] = useState<"forgot" | "code" | "reset">("forgot");

  const handleStepChange = (nextStep: "forgot" | "code" | "reset") => {
    setStep(nextStep);
  };

  return (
    <>
      {step === "forgot" && <ForgotPassword onNextStep={() => handleStepChange("code")} />}
      {step === "code" && <CodeReceive onPreviousStep={() => handleStepChange("forgot")} onNextStep={() => handleStepChange("reset")} />}
      {step === "reset" && <ResetPassword onPreviousStep={() => handleStepChange("code")} />}
    </>
  );
};

export default PasswordReset;
