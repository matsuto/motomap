import { useEffect, useState } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import {
  User,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { firebaseApp } from "./firebase";
import { setUser } from "./db/user"

type UserState = User | null;

const userState = atom<UserState>({
  key: "userState",
  default: null,
  dangerouslyAllowMutability: true,
});

export function login(email: string, password: string) {
  const auth = getAuth(firebaseApp);
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = (): Promise<void> => {
  const auth = getAuth(firebaseApp);
  return signOut(auth);
};

export const useAuth = (): boolean => {
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    return onAuthStateChanged(auth, (user) => {
    setUser(user);
    setIsLoading(false);
    });
  }, [setUser]);

  return isLoading;
};

export const useUser = (): UserState => {
  return useRecoilValue(userState);
};

export function register(email: string, password: string) {
  const auth = getAuth(firebaseApp);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setUser(userCredential.user);
      console.log('user created')
    })
    .catch((error) => {
      alert(error.message)
      console.error(error)
    })
};
