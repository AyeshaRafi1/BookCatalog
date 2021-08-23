import React from "react";
import { connect } from "react-redux";

import { FaPlusCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

import { toggleAddBook } from "../../redux/user/user.actions";

import "./add-book-button.styles.scss";

import { fetchAuthorStartAsync } from "../../redux/authors/authors.actions";
import { createStructuredSelector } from "reselect";
import { selectallAuthors } from "../../redux/authors/authors.selectors";

const AddBookButton = ({ toggleAddBook, fetchAuthorStartAsync, allAuthor }) => {
  const onAddBookButtonClick = () => {
    toggleAddBook();
    if (!allAuthor) {
      fetchAuthorStartAsync();
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

const mapDispatchToProps = (dispatch) => ({
  toggleAddBook: () => dispatch(toggleAddBook()),
  fetchAuthorStartAsync: () => dispatch(fetchAuthorStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  allAuthor: selectallAuthors,
});
export default connect(mapStateToProps, mapDispatchToProps)(AddBookButton);
