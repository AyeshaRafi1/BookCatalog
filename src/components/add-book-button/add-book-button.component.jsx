import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaPlusCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

import { toggleAddBook } from "../../redux/user/user.actions";

import "./add-book-button.styles.scss";

import { fetchAuthorStartAsync } from "../../redux/authors/authors.actions";

const AddBookButton = () => {
  const dispatch = useDispatch();

  const allAuthor = useSelector((state) => state.author.allAuthors);

  const onAddBookButtonClick = () => {
    dispatch(toggleAddBook());
    if (!allAuthor) {
      dispatch(fetchAuthorStartAsync());
    }
  };

  return (
    <IconContext.Provider
      value={{ style: { fontSize: "55px", color: "rgb(175,56,89)" } }}>
      <div className='Add-book-icon' onClick={onAddBookButtonClick}>
        <FaPlusCircle />
      </div>
    </IconContext.Provider>
  );
};

export default AddBookButton;
