import React from "react";
import { useDispatch } from "react-redux";

import { FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";

import "./delete-book-button.styles.scss";

import { toggleDeleteBook } from "../../redux/books/books.actions";

const DeleteBookButton = () => {
  const dispatch = useDispatch();

  return (
    <IconContext.Provider
      value={{ style: { fontSize: "45px", color: "rgb(255,255,255)" } }}>
      <div
        className='delete-book-icon'
        onClick={() => dispatch(toggleDeleteBook())}>
        <FaTrash />
      </div>
    </IconContext.Provider>
  );
};

export default DeleteBookButton;
