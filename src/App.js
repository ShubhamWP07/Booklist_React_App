import React from "react";
import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const deleteBooksById = (id) => {
    const upadtedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(upadtedBooks);
  };

  const createBook = (title) => {
    const upadtedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(upadtedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBooksById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
