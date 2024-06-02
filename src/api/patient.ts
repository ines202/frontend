import { QueryOptions, skipToken, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import API from "@/app/lib/api";
import { AxiosError } from "axios";
import { PatientProfile } from "@/types/patientProfile";

export const useGetPatients = (includeArchived = false) => {
  return useQuery<PatientProfile[], AxiosError>({
    queryKey: ["patients", includeArchived],
    queryFn: async () => {
      try {
        const response = await API.get("/patients", {
          params: { includeArchived },
        });
        return response.data.data;
      } catch (error) {
        console.error("Error fetching patients:", error);
        throw error;
      }
    },
  });
};

export const useGetPatientById = (id: string) => {
  return useQuery<PatientProfile, AxiosError>({
    queryKey: ["patient", id],
    queryFn: async () => {
      try {
        const response = await API.get(`/patient/${id}`);
        return response.data.data;
      } catch (error: any) {
        console.error("Error fetching patient:", error);
        throw error;
      }
    },
  });
};

export const useArchivePatient = () => {
  return useMutation<void, AxiosError, { patientId: string; isArchived: boolean }>({
    mutationFn: async ({ patientId, isArchived }) => {
      try {
        await API.patch(`/patients/archive/${patientId}`, { isArchived });
      } catch (error: any) {
        console.error("Error archiving patient:", error);
        throw error;
      }
    },
  });
};
