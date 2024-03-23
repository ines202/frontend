import { useMutation, useQuery } from "@tanstack/react-query";
import API from "@/app/lib/api";
import { Doctor } from "@/types/doctor";
import { AxiosError } from "axios";

export const useCreateDoctor = () => {
  return useMutation<Doctor, AxiosError, Doctor>({
    mutationFn: async (newDoctor: Doctor) => {
      try {
        const response = await API.post("/doctor/register", newDoctor);
        return response.data;
      } catch (error:
        | {
            response: {
              data: {
                message: string;
              };
            };
          }
        | any) {
          throw error.response.data.message;
        }
    }
      
  });
};

export const useLoginDoctor = () => {
  return useMutation<
    { token: string; doctor: Doctor; success: string; status: boolean },
    AxiosError,
    { email: string; password: string }
  >({
    mutationFn: async (credentials) => {
      try {
        const response = await API.post("/doctor/login", credentials);
        return response.data;
      } catch (error:
        | {
            response: {
              data: {
                message: string;
              };
            };
          }
        | any) {
        throw error.response.data.message;
      }
    },
    onError: (error) => {
      console.error("Error logging in:", error);
    },
  });
};

// export const useGetDoctor = (id: string) => {
//   return useQuery<Doctor, AxiosError>(['doctor', id], () =>
//     API.get(`/doctor/${id}`).then(response => response.data)
//   );
// };
