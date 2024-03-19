import Calendar from "@/components/Calender";
import { Metadata } from "next";
import DashboardLayout from "@/components/Layouts/DashboardLayout";

export const metadata: Metadata = {
  title: "Next.js Calender | Doolab Dashboard",
  description: "Doolab Dashboard",
};

const CalendarPage = () => {
  return (
    <DashboardLayout>
      <Calendar />
    </DashboardLayout>
  );
};

export default CalendarPage;
