import { MedicalRecord } from "./medicalRecord";

export type DfuRecord = {
    id: number;
    medicalRecordId: MedicalRecord;
    view: string;
    description: string;
    image: string;
  };
