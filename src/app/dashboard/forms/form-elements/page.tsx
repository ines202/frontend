import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DashboardLayout from "@/components/Layouts/DashboardLayout";

export const metadata: Metadata = {
  title: "Next.js Form Elements | Doolab Dashboard",
  description: "Doolab Dashboard",
};

const FormElementsPage = () => {
  return (
    <DashboardLayout>
      <FormElements />
    </DashboardLayout>
  );
};

export default FormElementsPage;
