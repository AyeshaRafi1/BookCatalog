import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import "./confirm-delete.styles.scss";

import {
  toggleDeleteBook,
  toggleBookHidden,
} from "../../redux/books/books.actions";
import { updateBooks } from "../../redux/user/user.actions";

const ConfirmDelete = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  const currentBook = useSelector((state) => state.book.currentBook);

  const removeBookAndHideBookDetails = () => {
    // getting the index of the current book that we want to delete
    const index = currentUser.bookList.indexOf(currentBook.Name);

    // filtered books is an array of books that does not include the book we wanna delete
    const filteredBooks = currentUser.bookList.filter((value) => {
      return value !== currentBook.Name;
    });

    // removing the selected book ID from the list of book IDs using the splice method
    let filteredIds = [...currentUser.bookIDs];
    filteredIds.splice(index, 1);

    // creating a shallow copy of the current user so that react renders the new state
    let copyCurrentUser = {
      ...currentUser,
    };

    copyCurrentUser.bookList = filteredBooks;
    copyCurrentUser.bookIDs = filteredIds;
    // updating current user
    dispatch(updateBooks(copyCurrentUser));

    dispatch(toggleBookHidden());
  };

  return (
    <div className='confirm-delete'>
      <p className='confirm-delete-text'>
        Are you sure you want to delete this book?
      </p>
      <div className='confirm buttons'>
        <CustomButton onClick={removeBookAndHideBookDetails}>yes</CustomButton>
        <CustomButton onClick={() => dispatch(toggleDeleteBook())}>
          no
        </CustomButton>
      </div>
    </div>
  );
};

export default ConfirmDelete;
