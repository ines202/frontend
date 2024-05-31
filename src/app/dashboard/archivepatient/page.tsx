"use client";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import ArchivePatient from "@/components/ArchivePatient/ArchivePatient";

const TablesPage = () => {
  return (
    <DashboardLayout>

      <div className="flex flex-col gap-10">
        <ArchivePatient />
      </div>
    </DashboardLayout>
  );
};
export default TablesPage;
