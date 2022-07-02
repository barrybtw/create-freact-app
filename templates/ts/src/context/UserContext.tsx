import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../lib/firebase";

export const UserContext = createContext<User | Object>({});

type TUserProvider = ({ children }: { children: ReactNode }) => JSX.Element;

const UserProvider: TUserProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  console.log("UserProvider");

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return subscribe;
  }, []);

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  const userObject = {
    user,
    signUp,
    logIn,
    logOut,
  };

  return (
    <UserContext.Provider value={userObject}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
