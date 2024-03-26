import { MedicalRecord } from "./medicalRecord";
export type Medication = {
    id: number;
    medicalRecordId: MedicalRecord;
    med_name: string;
    description: string;
  };
