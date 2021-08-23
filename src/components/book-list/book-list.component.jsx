import React from "react";
import Book from "../book-button/book-button.component";
import Spinner from "../spinner/spinner.component";

import "./book-list.styles.scss";

const BookList = ({ booklist, bookIds }) => {
  return (
    <div className='book-list'>
      {booklist ? (
        booklist.map((book, ind) => (
          <Book key={ind} bookind={bookIds[ind]} name={book} />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default BookList;
