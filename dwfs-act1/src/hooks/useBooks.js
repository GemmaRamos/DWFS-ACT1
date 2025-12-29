import { useContext } from 'react';
import { booksData } from '../data/booksData';
import { BookContext } from "../context/BookContext";

export const useBooks = () => {
    const { title, changeTitle } = useContext(BookContext);

    // Filtra libros según el título
    const normalizeText = (text) =>
        text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ''); // esto evita errores en búsquedas de títulos con tildes

    const normalizedTitle = normalizeText(title);
    const books = title.trim() === ''
        ? booksData       // muestra todos si no hay búsqueda
        : booksData.filter(book =>
            normalizeText(book.title).includes(normalizedTitle)
        );

    const getBookById = (id) => booksData.find(book => book.id === Number(id));

    return {
        // Estado
        title,
        // Acciones
        changeTitle,
        // Datos derivados
        books,
        getBookById
    };
};
