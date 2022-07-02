import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUser() {
  const contextValue = useContext(UserContext);

  if (contextValue === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return contextValue;
}
