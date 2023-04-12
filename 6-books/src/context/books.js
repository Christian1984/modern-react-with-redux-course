import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // this used to appear in the dependency array inside App.js' useEffect hook
  // which caused indefinite rerenders and api calls.
  // wrapping the function in a useCallback hook mitigates the issue (see below)
  // const fetchBooks = async () => {
  //   const response = await axios.get("http://localhost:3001/books");
  //   setBooks(response.data);
  // };

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const share = { books, fetchBooks, editBookById, deleteBookById, createBook };

  return <BooksContext.Provider value={share}>{children}</BooksContext.Provider>;
};

export { BooksContext, BooksProvider };
