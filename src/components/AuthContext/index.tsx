import { Doctor } from "@/types/doctor";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  loggedInUser: Doctor | null;
  login: () => void;
  logout: () => void;
  signUp: (myNewDoctor: Doctor) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

const myDoctor: Doctor = {
  name: "Ines",
  lastName: "Boukhors",
  email: "ines.boukhors@univ-constantine2.dz",
  address: "Constantine",
  speciality: "Dentist",
  phoneNumber: "0555555555",
  password: "123456",
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState<Doctor | null>(null);
  const logout = () => {
    setLoggedInUser(null);
    router.push("/dashboard/auth/signin");
  };
  const login = () => {
    console.log("Logging in...");
    setLoggedInUser(loggedInUser);
    router.push("/dashboard");
  };

  const signUp = (myNewDoctor: Doctor) => {
    console.log("myNewDoctor: ", myNewDoctor);
    setLoggedInUser(myNewDoctor);
    router.push("/dashboard/auth/signin");
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
