import React from "react";
import { useState } from "react";
import BookCreate from "./Components/BookCreate";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const upadtedBooks = [
      ...books,
      { id: Math.round(Math.random() * 5), title: title },
    ];
    setBooks(upadtedBooks);
  };

  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
