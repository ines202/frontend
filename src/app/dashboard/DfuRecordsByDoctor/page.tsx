"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DashboardLayout from "@/components/Layouts/DashboardLayout";
import DfuRecordsByDoctor from "@/components/DfuRecordsByDoctor/DfuRecordsByDoctor";

const TablesPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-10">
        <DfuRecordsByDoctor />
      </div>
    </DashboardLayout>
  );
};
export default TablesPage;
