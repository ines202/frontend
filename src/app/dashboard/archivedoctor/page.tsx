"use client";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import ArchiveDoctor from "@/components/ArchiveDoctor/ArchiveDoctor";

const TablesPage = () => {
  return (
    <DashboardLayout>

      <div className="flex flex-col gap-10">
        <ArchiveDoctor />
      </div>
    </DashboardLayout>
  );
};
export default TablesPage;
