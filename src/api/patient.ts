import { QueryOptions, skipToken, useMutation, useQuery } from "@tanstack/react-query";
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
// export const archivePatient = async (id) => {
//   try {
//     const response = await API.put(`/patient/${id}/archive`); // Utilisez l'endpoint approprié pour l'archivage
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
// export const useArchivePatient = () => {
//   return useMutation<void, AxiosError, string>(
//     async (id: string) => {
//       try {
//         await archivePatient(id);
//       } catch (error: any) {
//         console.error("Error archiving patient:", error);
//         throw error;
//       }
//     },
//     {
//       onSuccess: () => {
//         queryCache.invalidateQueries("patients"); // Rafraîchir la liste des patients après l'archivage
//       },
//     }
//   );
// };


