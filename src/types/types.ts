export const Roles = {
  doctor: "doctor",
  admin: "admin",
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];
