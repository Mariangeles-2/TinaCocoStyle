//Importa data de archivo JSON
import data from "../assets/json/articulos.json";

export const fetchArticulos = async (categoriaId) => {
    const arts = await Promise.resolve(data);
    if (categoriaId) {
        return arts.filter((art) => art.category === categoriaId);
    } else {
        return arts;
    }
};