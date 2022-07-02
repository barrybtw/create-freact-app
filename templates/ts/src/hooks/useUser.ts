import { User } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

interface UserContextResponse {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
}

export function useUser() {
  const contextValue = useContext(UserContext) as UserContextResponse;

  if (contextValue === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return contextValue;
}
