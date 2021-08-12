import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './book-details.styles.scss';


import { selectCurrentBook, selectIsBookFetching, selectIsHidden } from '../../redux/books/books.selectors';


const BookDetails = ({ currentBook, fetching, hidden } ) =>{


    return (
        <div className={`book-details ${hidden? "hidden": ""}`}>
            <h2>
                {
                currentBook? currentBook.name  : (
                    "Harry Potter"
                )
                }
            </h2>
            <h3>
                {
                currentBook?  currentBook.genre : (
                    "sci"   
                )
                }
            </h3>
            <h3>
                {
                currentBook? currentBook.Author : (
                    "j k rowling"
                )
                }
            </h3>
            <h3>
                other books by this Auther
            </h3>
            <ul>
                <li>harry potter part 2</li>
            </ul>

        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    hidden: selectIsHidden,
    fetching: selectIsBookFetching,
    currentBook: selectCurrentBook
  });

export default connect(mapStateToProps)(BookDetails);