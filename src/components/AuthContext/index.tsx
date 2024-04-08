import { Doctor } from "@/types/doctor";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useCreateDoctor, useLoginUser, useVerifyUserToken } from "@/api/user";
import { toast } from "react-toastify";
import { User } from "@/types/user";
import { Roles } from "@/types/types";

interface AuthContextType {
  loggedInUser: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signUp: (myNewDoctor: Omit<Doctor, "id">) => void;
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
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  // Queries

  // Mutations
  const { mutateAsync: createDoctor, isPending: isPendingCreateDoctor } =
    useCreateDoctor();
  const { mutateAsync: loginUser, isPending: isPendingLoginDoctor } =
    useLoginUser();
  const { mutateAsync: verifyUserToken, isPending: isPendingVerifyUserToken } =
    useVerifyUserToken();

  // Effects

  useEffect(() => {
    // Check if the user is already logged in by checking localStorage item "token"
    const token = localStorage.getItem("token");
    if (token) {
      // Send a request to the backend with the token to get the user details
      verifyUserToken(
        { token },
        {
          onSuccess: (resp) => {
            const { role, doctor, admin } = resp.data;
            if (role === Roles.admin) {
              setLoggedInUser({
                role,
                token,
                admin: admin,
              });
            } else {
              setLoggedInUser({
                role,
                token,
                doctor: doctor,
              });
            }
          },
          onError: (error) => {
            console.error(error);
            toast.error(`Login Failed: ${error}`);
          },
        },
      );
    }
  }, []);

  // Handlers
  const logout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("token");
    router.push("/signup");
  };

  const login = async (email: string, password: string) => {
    console.log("Logging in...");
    await loginUser(
      { email, password },
      {
        onSuccess: (data) => {
          console.log('data: ', data);
          const { role, doctor, admin, token } = data;
          if (role === Roles.admin) {
            setLoggedInUser({
              role,
              token,
              admin: admin,
            });
          } else {
            setLoggedInUser({
              role,
              token,
              doctor: doctor,
            });
          }
          // Store the token in localStorage
          localStorage.setItem("token", token);
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

  const signUp = async (myNewDoctor: Omit<Doctor, "id">) => {
    console.log("Signing up...");
    await createDoctor(myNewDoctor, {
      onSuccess: () => {
        toast.success("Doctor Signed-up successfully");
        setTimeout(() => {
          router.push("/signin");
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
