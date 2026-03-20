import { db } from "@/app/utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  try {
    const querySnapshot = await getDocs(
      collection(db, "users", userId, "items"),
    );
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error reading items: ", userId, error);
    return [];
  }
}

export async function addItem(userId, item) {
  try {
    const newDoc = await addDoc(collection(db, "users", userId, "items"), item);
    return newDoc.id;
  } catch (error) {
    console.error(`Error adding ${item}`);
  }
}
