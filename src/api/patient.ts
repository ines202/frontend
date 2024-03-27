import { QueryOptions, skipToken, useQuery } from "@tanstack/react-query";
import API from "@/app/lib/api";
import { AxiosError } from "axios";
import { PatientProfile } from "@/types/patientProfile";

export const useGetPatients = () => {
  return useQuery<PatientProfile[], AxiosError>({
    queryKey: ["patients"], // Wrap the string in an array
    queryFn: async () => {
      try {
        const response = await API.get("/patients");
        return response.data.data;
      } catch (error: any) {
        // Handle errors here
        console.error("Error fetching patients:", error);
        throw error; // Re-throw to inform React Query of the error
      }
    },
  });
};

export const useGetPatientById = (id: string) => {
  return useQuery<PatientProfile, AxiosError>({
    queryKey: ["patient", id], // Wrap the string in an array
    queryFn: async () => {
      try {
        const response = await API.get(`/patient/${id}`);
        return response.data.data;
      } catch (error: any) {
        // Handle errors here
        console.error("Error fetching patient:", error);
        throw error; // Re-throw to inform React Query of the error
      }
    },
  });
};
