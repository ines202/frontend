import {
  useQuery,
} from "@tanstack/react-query";
import API from "@/app/lib/api";
import { AxiosError } from "axios";

export const useGetDashboardStatistics = () => {
  return useQuery<{
    total_users: number,
    total_patients: number,
    total_patients_archived: number,
    total_doctors: number,
    total_doctors_archived: number,
    registeredCount: {
      date: string;
      count: string;
      role: "Patient" | "Doctor";
    }[]
  }, AxiosError>({
    queryKey: ["dashboardStatistics"],
    queryFn: async () => {
      try {
        const response = await API.get("/dashboard/statistics");
        return response.data.data;
      } catch (error: any) {
        console.error("Error fetching dashboard statistics:", error);
        throw error;
      }
    },
  });
};