import { useMutation } from "@tanstack/react-query";
import API from "@/app/lib/api";
import { AxiosError } from "axios";

export const UploadFolders = {
  "doctor/documents": "doctor/documents",
  "doctor/images": "doctor/images",
  "patient/documents": "patient/documents",
  "patient/images": "patient/images",
} as const;

type UploadFilesArgs = {
  files: File[];
  folder: (typeof UploadFolders)[keyof typeof UploadFolders];
};

export const useUploadFiles = () => {
  return useMutation<
    { files: { path: string }[]; status: boolean },
    AxiosError,
    UploadFilesArgs
  >({
    mutationFn: async ({ files, folder }: UploadFilesArgs) => {
      try {
        const formData = new FormData();
        formData.append("folder", folder);
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
