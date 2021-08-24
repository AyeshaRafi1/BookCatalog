import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./book-button.styles.scss";

import { fetchBookAndAuthorAndToggleDetails } from "../../redux/books/books.actions";

const Book = ({ bookind, name }) => {
  const dispatch = useDispatch();

  const currentBook = useSelector((state) => state.book.currentBook);
  const error = useSelector((state) => state.book.errorMessage);
  const hidden = useSelector((state) => state.book.hidden);

  const isCurrentBook = () => {
    if (currentBook && !hidden && currentBook.Name === name) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <button
      className={`${isCurrentBook() ? "selected-book" : ""} book`}
      onClick={() =>
        dispatch(
          fetchBookAndAuthorAndToggleDetails(
            name,
            currentBook,
            hidden,
            bookind,
            error
          )
        )
      }>
      {name}
    </button>
  );
};

export default Book;
