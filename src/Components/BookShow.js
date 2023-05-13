import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete }) => {
  const [showEdit, setshowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setshowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} />;
  }

  return (
    <>
      <div className="book-show">
        <div>{content}</div>
        <div className="actions">
          <button className="edit" onClick={handleEditClick}>
            Edit
          </button>
          <button className="delete" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default BookShow;
