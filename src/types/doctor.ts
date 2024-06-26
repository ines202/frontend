export type Doctor = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  speciality: string;
  phone: string;
  password: string;
  role: string;
  bio?: string;
  document: string;
  profilePicture?: string;
  isDisabled: boolean;
  isArchived?: boolean;
};
