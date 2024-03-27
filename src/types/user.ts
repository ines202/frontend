import { Admin } from "./admin";
import { Doctor } from "./doctor";
import { Role } from "./types";

export type User = {
  role: Role;
  token: string;
  doctor?: Doctor;
  admin?: Admin;
};
