import { Admin } from "./admin";
import { Doctor } from "./doctor";
import { Role } from "./types";

export type User = {
  profilePicture: User | null;
  role: Role;
  token: string;
  doctor?: Doctor;
  admin?: Admin;
};
