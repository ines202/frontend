"use client";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Doctors from "@/components/Doctors/Doctors";

const TablesPage = () => {
  return (
    <DashboardLayout>
      
      <div className="flex flex-col gap-10">
        <Doctors />
      </div>
    </DashboardLayout>
  );
};
export default TablesPage;
