import { QueryOptions, skipToken, useQuery } from "@tanstack/react-query";
import API from "@/app/lib/api";
import { AxiosError } from "axios";
import { Doctor } from "@/types/doctor";

export const useGetDoctors = () => {
  return useQuery<Doctor[], AxiosError>({
    queryKey: ["doctors"], // Wrap the string in an array
    queryFn: async () => {
      try {
        const response = await API.get("/doctors");
        return response.data.data;
      } catch (error: any) {
        // Handle errors here
        console.error("Error fetching doctors:", error);
        throw error; // Re-throw to inform React Query of the error
      }
    },
  });
};

export const useGetDoctorById = (id: string) => {
  return useQuery<Doctor, AxiosError>({
    queryKey: ["doctor", id], // Wrap the string in an array
    queryFn: async () => {
      try {
        const response = await API.get(`/doctor/${id}`);
        return response.data.data;
      } catch (error: any) {
        // Handle errors here
        console.error("Error fetching doctor:", error);
        throw error; // Re-throw to inform React Query of the error
      }
    },
  });
};
