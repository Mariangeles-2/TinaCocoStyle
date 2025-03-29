//Importa librería de firebase
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
//Importa archivo JSON
import data from "../assets/json/articles.json";

export const uploadJsonToFirebase = async () => {
  const collectionRef = collection(db, "articulos");

  const existingDocsSnapshot = await getDocs(collectionRef);

  if (existingDocsSnapshot.empty) {
    for (const item of data) {
      try {
        await addDoc(collectionRef, item);
        console.log("Documento agregado con nombre: ", item.name);
      } catch (e) {
        console.error("Error al agregar documento: ", e);
      }
    }
  } else {
    console.log("La colección ya contiene documentos.");
  }
};
