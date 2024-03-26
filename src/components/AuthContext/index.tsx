import { Doctor } from "@/types/doctor";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useCreateDoctor, useLoginDoctor } from "@/api/doctor";
import { toast } from "react-toastify";

interface AuthContextType {
  loggedInUser: Doctor | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signUp: (myNewDoctor: Doctor) => void;
  loading: boolean;
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

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState<Doctor | null>(null);

  // Queries

  // Mutations
  const { mutateAsync: createDoctor, isPending: isPendingCreateDoctor } =
    useCreateDoctor();
  const { mutateAsync: loginDoctor, isPending: isPendingLoginDoctor } =
    useLoginDoctor();

  const logout = () => {
    setLoggedInUser(null);
    router.push("/signup");
  };

  const login = async (email: string, password: string) => {
    console.log("Logging in...");
    await loginDoctor(
      { email, password },
      {
        onSuccess: (data) => {
          const { doctor } = data;
          setLoggedInUser(doctor);
          toast.success("Login successful");
          setTimeout(() => {
            router.push("/dashboard");
          }, 3000);
        },
        onError: (error) => {
          console.error(error);
          toast.error(`Login Failed: ${error}`);
        },
      },
    );
  };

  const signUp = async (myNewDoctor: Doctor) => {
    console.log("Signing up...");
    await createDoctor(myNewDoctor, {
      onSuccess: () => {
        toast.success("Doctor Signed-up successfully");
        setTimeout(() => {
          router.push("/signup");
        }, 3000);
      },
      onError: (error) => {
        console.error(error);
        toast.error(`Login Failed: ${error}`);
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        login,
        logout,
        signUp,
        loading: isPendingLoginDoctor || isPendingCreateDoctor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
