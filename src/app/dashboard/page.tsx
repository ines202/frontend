"use client";
import { useAuth } from "@/components/AuthContext";
import Dashboard from "@/components/Dashboard/dashboard";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { Doctor } from "@/types/doctor";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { loggedInUser, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loggedInUser) {
      router.push("/signup");
    }
  }, [loggedInUser]);

  return (
    <>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </>
  );
}
