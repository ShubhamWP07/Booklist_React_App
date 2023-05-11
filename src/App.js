import React from "react";
import { useState } from "react";
import BookCreate from "./Components/BookCreate";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("need to create book with", title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
