import { Doctor } from "./doctor";
import { Patient } from "./patient";

export type MedicalRecord = {
  id: number;
  patientId: Patient;
  doctorId: Doctor;
  diabetesType: string;
  hasDFU: boolean;
  isSmoker: boolean;
  hadDiabetes: Date;
  bloodGroup: string;
  doctor?: Doctor;
};
