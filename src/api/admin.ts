import {
  QueryOptions,
  skipToken,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import API from "@/app/lib/api";
import { AxiosError } from "axios";
import { Admin } from "@/types/admin";

export const useUpdateAdmin = () => {
  return useMutation<
    {
      status: boolean;
      message: string;
      token: string;
    },
    AxiosError,
    Admin
  >({
    mutationFn: async (admin) => {
      try {
        const response = await API.put(`/admin/${admin.id}`, admin); // Supposons que votre endpoint pour mettre à jour les informations de l'administrateur soit "/admin/:id"
        return response.data;
      } catch (error: any) {
        console.error("Error updating admin:", error);
        throw error;
      }
    },
  });
};

