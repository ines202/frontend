"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Test from "@/components/Test/Test";


const TablesPage = () => {
  return (
    <DashboardLayout>
      
      <div className="flex flex-col gap-10">
        <Test />
        
      </div>
    </DashboardLayout>
  );
};
export default TablesPage;
