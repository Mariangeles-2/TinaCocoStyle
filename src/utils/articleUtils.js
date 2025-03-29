// Importa conexión con Firebase
import { db } from "../config/firebaseConfig";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

export const fetchArticles = async (categoryId) => {
    try {
        const collectionRef = collection(db, "articulos");
        let q;

        if (categoryId) {
            q = query(collectionRef, where("category", "==", categoryId));
        } else {
            q = query(collectionRef);
        }

        const response = await getDocs(q);
        const data = response.docs.map((doc) => (mapDocToArticle(doc)));
        return data;
    } catch (error) {
        console.error("Error carga de artículos", error);
    }
};

export const fetchArticleById = async (id) => {
    try {
        const docRef = doc(db, "articulos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return mapDocToArticle(docSnap);
        } else {
            console.error("No existe el documento!");
            return null;
        }
    } catch (error) {
        console.error("Error carga de artículo", error);
    }
};

const mapDocToArticle = (doc) => {
    return { ...doc.data(), id: doc.id };
}