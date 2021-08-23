import React from "react";
import { useSelector } from "react-redux";

import AddBookButton from "../../components/add-book-button/add-book-button.component";
import BookList from "../../components/book-list/book-list.component";

import AddBook from "../add-book/add-book.component";
import Spinner from "../spinner/spinner.component";

import "./book-tiles.styles.scss";

const BookTiles = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const addBook = useSelector((state) => state.user.addBook);

  return (
    <div className='left-container'>
      <h1 className='heading'>
        {currentUser ? (
          currentUser.displayName ? (
            `${currentUser.displayName.split(" ")[0]}'s Reading List`
          ) : (
            <Spinner />
          )
        ) : null}
      </h1>

      {currentUser ? (
        currentUser.bookList ? (
          currentUser.bookList.length ? (
            <BookList
              booklist={currentUser.bookList}
              bookIds={currentUser.bookIDs}
            />
          ) : (
            "you have no books added currently"
          )
        ) : (
          <Spinner />
        )
      ) : (
        <Spinner />
      )}

      <div className='Adding-book'>
        <AddBookButton />
        {addBook ? <AddBook /> : null}
      </div>
    </div>
  );
};

export default BookTiles;
