import React from "react";
import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const editBooksById = (id, newTitle) => {
    const upadtedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(upadtedBooks);
  };

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
      <h1>Reading List</h1>
      <BookList
        onEdit={editBooksById}
        books={books}
        onDelete={deleteBooksById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
