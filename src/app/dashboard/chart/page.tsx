import Chart from "@/components/Charts/page";
import { Metadata } from "next";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Chart | Doolab Dashboard",
  description: "Doolab Dashboard",
};

const BasicChartPage: React.FC = () => {
  return (
    <DashboardLayout>
      <Chart />
    </DashboardLayout>
  );
};

export default BasicChartPage;
