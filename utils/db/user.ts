import { User } from "firebase/auth";
import { firebaseApp } from "../firebase";
import { setDoc, doc, Firestore, getFirestore, serverTimestamp, updateDoc, getDoc, DocumentSnapshot } from "firebase/firestore"

const db: Firestore = getFirestore(firebaseApp)

export async function getUser(user: User) {
  const docRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export function setUser(user: User) {
  const docRef = doc(db, 'users', user.uid);
  const data = {
    uid: user.uid,
    email: user.email,
    created_at: serverTimestamp(),
  };
  setDoc(docRef, data);
};

export function updateUser(user: User, firstName: string | undefined, lastName: string | undefined, firstNameKana: string | undefined, lastNameKana: string | undefined, pref: string | undefined, birthday: Date | undefined) {
  const docRef = doc(db, 'users', user.uid);
  const data = {
    firstName: firstName,
    lastName: lastName,
    firstNameKana: firstNameKana,
    lastNameKana: lastNameKana,
    pref: pref,
    birthday: birthday,
    updated_at: serverTimestamp(),
  };
  updateDoc(docRef, data);
}