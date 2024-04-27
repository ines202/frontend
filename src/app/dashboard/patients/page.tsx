"use client";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Patients from "@/components/Patients/Patients";

const TablesPage = () => {
  return (
    <DashboardLayout>
      
      <div className="flex flex-col gap-10">
        <Patients />
        
      </div>
    </DashboardLayout>
  );
};
export default TablesPage;
