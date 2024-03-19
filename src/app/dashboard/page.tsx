import Dashboard from "@/components/Dashboard/dashboard";
import { Metadata } from "next";
import DashboardLayout from "@/components/Layouts/DashboardLayout";

export const metadata: Metadata = {
  title: "Doolab | Dashboard",
  description: "Doolab Dashboard",
};

export default function Home() {
  return (
    <>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </>
  );
}
