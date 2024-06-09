import { MedicalRecord } from "./medicalRecord";

export type DfuRecord = {
  id: number;
  medicalRecordId: MedicalRecord;
  prediction: string;
  image: string;
};
