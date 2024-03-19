import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DashboardLayout from "@/components/Layouts/DashboardLayout";

export const metadata: Metadata = {
  title: "Next.js Tables | Doolab Dashboard",
  description: "Doolab Dashboard",
};

const TablesPage = () => {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DashboardLayout>
  );
};

export default TablesPage;
