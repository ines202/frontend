import { MedicalRecord } from "./medicalRecord";

export type Patient = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  isArchived: boolean;
  medical_record?: MedicalRecord;
};
