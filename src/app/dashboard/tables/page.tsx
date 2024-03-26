"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import TableFour from "@/components/Tables/TableFour";



const TablesPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-10">
        <TableTwo />
       
      </div>
    </DashboardLayout>
  );
};
export default TablesPage;
