import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaChevronCircleUp } from "react-icons/fa";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { updateBooks, setCurrentUser } from "../../redux/user/user.actions";

import { addNewBookAndAuthor } from "../utility";
import "./add-book.styles.scss";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [addAuthor, setAddAuthor] = useState("no");

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  const authors = useSelector((state) => state.author.allAuthors);
  const fetching = useSelector((state) => state.author.isFetching);

  const submit = async (event) => {
    event.preventDefault();

    try {
      // checking to see if the book already does not exist in the book list that the user has
      if (currentUser.bookList.includes(bookName)) {
        alert("you already have this book in your list");
        setBookName("");
        setAuthor("");
        setGenre("");
        return;
      }

      const allBooks = [...currentUser.bookList, bookName];

      let copyCurrentUser = {
        ...currentUser,
      };
      copyCurrentUser.bookList = allBooks;
      // setting the book name in the current user of the new book so that the user does not observe the delay
      dispatch(setCurrentUser(copyCurrentUser));

      // clearing the values that the user entred from the input field so the user thinks the action has been performed
      setBookName("");
      setAuthor("");
      setGenre("");

      // utility function checking all the edge cases that need to be checked when the user addes a book
      const bookId = await addNewBookAndAuthor(bookName, genre, author);

      const allBookIds = [...currentUser.bookIDs, bookId];

      copyCurrentUser.bookIDs = allBookIds;

      // finally we need to add the the book to our list and update the books list in the user
      dispatch(updateBooks(copyCurrentUser));
      setAddAuthor("no");
    } catch (error) {
      console.error(error);
    }
  };

  const change = (event) => {
    const { name, value } = event.target;
    if (name === "bookName") {
      setBookName(value);
    } else if (name === "genre") {
      setGenre(value);
    } else {
      setAuthor(value);
    }
  };

  return (
    <div className='add-book'>
      <form className='sign-up-form' onSubmit={submit}>
        <FormInput
          caller='addbook'
          type='text'
          name='bookName'
          value={bookName}
          onChange={change}
          label='Book Name'
          required
        />
        <FormInput
          caller='addbook'
          type='text'
          name='genre'
          value={genre}
          onChange={change}
          label='Genre'
          required
        />
        {addAuthor === "no" ? (
          <div className='dropup'>
            <button className='dropbtn'>
              Author <FaChevronCircleUp />
            </button>
            <div className='dropup-content'>
              {fetching
                ? null
                : authors.names.map((auth, ind) => (
                    <div
                      className='select-author'
                      onClick={() => {
                        setAuthor(auth);
                        setAddAuthor("yes");
                      }}
                      key={ind}>
                      {auth}
                    </div>
                  ))}
              <div
                className='select-author'
                onClick={() => {
                  setAddAuthor("yes");
                }}>
                add a new author
              </div>
            </div>
            <hr></hr>
          </div>
        ) : (
          <FormInput
            caller='addbook'
            type='text'
            name='author'
            value={author}
            onChange={change}
            label='Author'
            required
          />
        )}

        {/*  */}
        <CustomButton type='submit'>ADD BOOK</CustomButton>
      </form>
    </div>
  );
};

export default AddBook;
