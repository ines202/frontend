import { MedicalRecord } from "./medicalRecord";

export type Glycemia = {
    id: number;
    medicalRecordId: MedicalRecord;
    rate: number;
  };