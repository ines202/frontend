import { Metadata } from "next";
import MainLayout from "@/components/Layouts/MainLayout";
import Homepage from "@/components/Homepage";

export const metadata: Metadata = {
  title: "Doolab | Dashboard",
  description: "Doolab Dashboard",
};

export default function Home() {
  return (
    <>
      <MainLayout>
        <Homepage/>
      </MainLayout>
    </>
  );
}
