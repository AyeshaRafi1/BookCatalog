import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./book-button.styles.scss";

import {
  toggleBookHidden,
  fetchBookStartAsync,
} from "../../redux/books/books.actions";

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
  const fetchBookAndAuthorAndToggleDetails = async () => {
    if (currentBook) {
      //if the name of current book matches the book that we want to fetch then no need to fetch
      if (currentBook.Name === name) {
        dispatch(toggleBookHidden());
      }
      // if name does not match and the details bar is hidden then we need to fetch book and toggle hidden
      else if (hidden) {
        await dispatch(fetchBookStartAsync(bookind));
        dispatch(toggleBookHidden());
      }
      // if the name does not match and the details are not hidden, simply fetch new book, no need to close
      else {
        await dispatch(fetchBookStartAsync(bookind));
      }
    } else {
      // if there is no current book and there is an error then only fetch new book and do not close details
      if (error) {
        await dispatch(fetchBookStartAsync(bookind));
      }
      // if none of the above cases then simply fetch book and toggle hidden
      else {
        await dispatch(fetchBookStartAsync(bookind));
        dispatch(toggleBookHidden());
      }
    }
    //${isSelected? 'selected-book' : ''}
  };
  return (
    <button
      className={`${isCurrentBook() ? "selected-book" : ""} book`}
      onClick={fetchBookAndAuthorAndToggleDetails}>
      {name}
    </button>
  );
};

export default Book;
