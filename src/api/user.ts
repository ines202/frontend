import { useMutation, useQuery } from "@tanstack/react-query";
import API from "@/app/lib/api";
import { Doctor } from "@/types/doctor";
import { AxiosError } from "axios";
import { Admin } from "@/types/admin";
import { Role } from "@/types/types";

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
    },
  });
};

export const useLoginUser = () => {
  return useMutation<
    {
      token: string;
      role: Role;
      doctor?: Doctor;
      admin?: Admin;
      success: string;
      status: boolean;
    },
    AxiosError,
    { email: string; password: string }
  >({
    mutationFn: async (credentials) => {
      try {
        const response = await API.post("/auth/login", credentials);
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

export const useVerifyUserToken = () => {
  return useMutation<
    {
      status: boolean;
      message: string;
      data: {
        role: Role;
        doctor: Doctor | undefined;
        admin: Admin | undefined;
      };
    },
    AxiosError,
    { token: string }
  >({
    mutationFn: async (token) => {
      try {
        const response = await API.post("/auth/verifyUserToken", token);
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
      console.error("Error verifying user:", error);
    },
  });
};

// export const useGetDoctor = (id: string) => {
//   return useQuery<Doctor, AxiosError>(['doctor', id], () =>
//     API.get(`/doctor/${id}`).then(response => response.data)
//   );
// };
