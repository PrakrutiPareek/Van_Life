import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite";

const api_key = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: api_key,
  authDomain: "vanlife-c1c69.firebaseapp.com",
  projectId: "vanlife-c1c69",
  storageBucket: "vanlife-c1c69.firebasestorage.app",
  messagingSenderId: "693721263517",
  appId: "1:693721263517:web:49eb1e21dbe40407d25374",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vanCollectionRef = collection(db, "vans");

export async function getVans() {
  const querySnapshot = await getDocs(vanCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

export async function getHostVans() {
  const q = query(vanCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(dataArr);
  return dataArr;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
