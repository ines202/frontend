import {
    useQuery,
  } from "@tanstack/react-query";
  import API from "@/app/lib/api";
  import { AxiosError } from "axios";
  import { Doctor } from "@/types/doctor";
  import { MedicalRecord } from "@/types/medicalRecord";
import { DfuRecord } from "@/types/dfuRecord";
import { Patient } from "@/types/patient";

type GetDfuRecordByDoctorType = DfuRecord & {
    medical_record: MedicalRecord & {
        patient: Patient;
    };
    updatedAtFormatted: string;
    createdAtFormatted: string;
};
  export const useGetDfuRecordsByDoctorId = (id?: number) => {
    return useQuery<
    {
        dfuRecords: GetDfuRecordByDoctorType[];
        status: boolean;
    }, 
    AxiosError
    >({
      queryKey: ["doctor", id],
      queryFn: async () => {
        try {
          const response = await API.get(`/dfu-records-by-doctor-id/${id}`);
        //   if (response.data.dfuRecords === undefined) {
        //     return []; 
        //   }
          return response.data;
        } catch (error: any) {
          console.error("Error fetching Dfu records for doctor:", error);
          throw error;
        }
      },
      enabled: !!id,
    });
  };