import {
  QueryOptions,
  skipToken,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import API from "@/app/lib/api";
import { AxiosError } from "axios";

export const useForgotPassword = () => {
  return useMutation<
    {
      status: boolean;
      message: string;
      token: string;
    },
    AxiosError,
    {
      email: string;
    }
  >({
    mutationFn: async (email) => {
      try {
        const response = await API.post("/forgot-password", email);
        return response.data;
      } catch (error: any) {
        console.error("Error sending password code:", error);
        throw error;
      }
    },
  });
};

export const useVerifyCode = () => {
  return useMutation<
    {
      status: boolean;
      message: string;
      token: string;
    },
    AxiosError,
    {
      email: string;
      code: string;
    }
  >({
    mutationFn: async (body) => {
      try {
        const response = await API.post("/verify-code", body);
        return response.data;
      } catch (error: any) {
        console.error("Error sending password code:", error);
        throw error;
      }
    },
  });
};

export const useResetPassword = () => {
  return useMutation<
    {
      status: boolean;
      message: string;
      token: string;
    },
    AxiosError,
    {
      email: string;
      newPassword: string;
    }
  >({
    mutationFn: async (body) => {
      try {
        const response = await API.post("/reset-password-admins-doctors", body);
        return response.data;
      } catch (error: any) {
        console.error("Error sending password code:", error);
        throw error;
      }
    },
  });
};
