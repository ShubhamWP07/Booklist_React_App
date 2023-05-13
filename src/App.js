import React from "react";
import { useState } from "react";
import BookCreate from "./Components/BookCreate";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const upadtedBooks = [...books, { id: 123, title: title }];
    setBooks(upadtedBooks);
    console.log([books]);
  };

  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
