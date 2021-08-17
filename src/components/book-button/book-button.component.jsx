import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './book-button.styles.scss';

import { toggleBookHidden,fetchBookStartAsync } from '../../redux/books/books.actions';
import { selectCurrentBook ,selectIsErrorWhileFetching,selectIsHidden} from '../../redux/books/books.selectors';

const Book =({bookind, name, fetchBookStartAsync, toggleBookHidden, currentBook, error, hidden})=>{

    const fetchBookAndAuthorAndToggleDetails = async ()=> {

        if (currentBook){
            //if the name of current book matches the book that we want to fetch then no need to fetch
            if (currentBook.Name === name){
                toggleBookHidden()
            }
            // if name does not match and the details bar is hidden then we need to fetch book and toggle hidden
            else if (hidden) {
                
                await fetchBookStartAsync(bookind)
                toggleBookHidden()
            }
            // if the name does not match and the details are not hidden, simply fetch new book, no need to close
            else {
                await fetchBookStartAsync(bookind)
            }
        }
        else {
            // if there is no current book and there is an error then only fetch new book and do not close details
            if(error){
                await fetchBookStartAsync(bookind)
            }
            // if none of the above cases then simply fetch book and toggle hidden
            else{
                await fetchBookStartAsync(bookind)
                toggleBookHidden()
            }
        }     
    }
    return (
        <button className='book' onClick={fetchBookAndAuthorAndToggleDetails}> {name}</button>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleBookHidden: ()=> dispatch(toggleBookHidden()),
    fetchBookStartAsync: (id) => dispatch(fetchBookStartAsync(id))

})

const mapStateToProps = createStructuredSelector({
    currentBook: selectCurrentBook,
    error: selectIsErrorWhileFetching,
    hidden: selectIsHidden,

  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Book);