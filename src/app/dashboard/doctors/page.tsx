"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Doctors from "@/components/Doctors/Doctors";

const TablesPage = () => {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Doctors" />
      <div className="flex flex-col gap-10">
        <Doctors />
      </div>
    </DashboardLayout>
  );
};
export default TablesPage;
