import React from "react";
import { useSelector } from "react-redux";

import "./book-details.styles.scss";

import DeleteBookButton from "../delete-book-button/delete-book-button.component";
import ConfirmDelete from "../confirm-delete/confirm-delete.component";
import Spinner from "../spinner/spinner.component";

const BookDetails = () => {
  const hidden = useSelector((state) => state.book.hidden);
  const fetching = useSelector((state) => state.book.isFetching);
  const currentBook = useSelector((state) => state.book.currentBook);
  const otherBooksByAuthor = useSelector(
    (state) => state.book.otherBooksByAuthor
  );
  const fetchingA = useSelector((state) => state.book.isFetchingA);
  const deleteBook = useSelector((state) => state.book.deleteBook);

  return (
    <div className={`book-details ${hidden ? "hidden" : ""}`}>
      {fetching ? (
        <Spinner />
      ) : (
        <div>
          {currentBook ? (
            <div>
              <h1 className='book-title'>{currentBook.Name}</h1>
              <h2 className='book-info'>{currentBook.Genre}</h2>
              <h2 className='book-info'>{currentBook.Author}</h2>
              <h2 className='book-info'>All Books by this Author</h2>
              {fetchingA ? (
                <Spinner />
              ) : (
                <div>
                  {otherBooksByAuthor ? (
                    <ul>
                      {otherBooksByAuthor.map((name, id) => (
                        <li className='list-item' key={id}>
                          {" "}
                          {name}{" "}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "sorry the other books by this author are not available"
                  )}
                </div>
              )}
            </div>
          ) : (
            "sorry the details of this book are not available"
          )}
        </div>
      )}
      <div className='delete-book-button-display'>
        {deleteBook ? <ConfirmDelete /> : null}
        <DeleteBookButton />
      </div>
    </div>
  );
};

export default BookDetails;
