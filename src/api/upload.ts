import { useMutation } from "@tanstack/react-query";
import API from "@/app/lib/api";
import { AxiosError } from "axios";

export const useUploadFiles = () => {
  return useMutation<
    { files: { path: string }[]; status: boolean },
    AxiosError,
    File[]
  >({
    mutationFn: async (files: File[]) => {
      try {
        const formData = new FormData();
        files.forEach((file) => formData.append("files", file));
        const response = await API.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data.files) {
          // Add base URL as prefix to each file path
          response.data.files = response.data.files.map(
            (file: { path: string }) => ({
              path: `${process.env.NEXT_PUBLIC_BASE_URL}${file.path}`,
            }),
          );
        }
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
