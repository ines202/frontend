import { Patient } from "./patient";
export type PatientProfile = {
  id: number;
  patientId: number;
  patient: Patient;
  gender: string;
  height: number;
  weight: number;
  birth_date: Date;
};