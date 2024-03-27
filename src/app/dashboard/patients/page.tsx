"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Patients from "@/components/Patients/Patients";

const TablesPage = () => {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Patients" />
      <div className="flex flex-col gap-10">
        <Patients />
      </div>
    </DashboardLayout>
  );
};
export default TablesPage;
