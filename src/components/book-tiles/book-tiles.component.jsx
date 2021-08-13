import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AddBookButton from '../../components/add-book-button/add-book-button.component';
import BookList from "../../components/book-list/book-list.component";

import { selectCurrentUser } from '../../redux/user/user.selectors';
import AddBook from '../add-book/add-book.component';

import './book-tiles.styles.scss';

const BookTiles = ({ currentUser}) => {
    
    return(
        <div className='left-container'>
            <h1 className="heading">
                {currentUser
                ?
                (
                    currentUser.displayName ?
                    `${currentUser.displayName.split(' ')[0]}'s Reading List`
                    :
                    "still fetching data"
                )
                : null
                }
            </h1>
        
        {currentUser
        ?
        (
            currentUser.bookList?
            <BookList booklist={currentUser.bookList} bookIds={currentUser.bookIDs}/> 
            :
            "you have no books added currently"
        ) 
        : "page is loading"
        }
        <div className="Adding-book">
            <AddBookButton/>
            <AddBook/>
        </div>
        
        </div>
        
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });

export default connect(mapStateToProps)(BookTiles);