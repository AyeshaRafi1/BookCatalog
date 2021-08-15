import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './book-button.styles.scss';

import { toggleBookHidden,fetchBookStartAsync } from '../../redux/books/books.actions';
import { selectCurrentBook ,selectIsErrorWhileFetching,selectIsHidden} from '../../redux/books/books.selectors';

const Book =({bookind, name, fetchBookStartAsync, toggleBookHidden, currentBook, error, hidden})=>{

    const fetchBookAndAuthorAndToggleDetails = async ()=> {

        if (currentBook){
            if (currentBook.Name === name){
                toggleBookHidden()
            }
            else if (hidden) {
                
                await fetchBookStartAsync(bookind)
                toggleBookHidden()
            }
            else {
                await fetchBookStartAsync(bookind)
            }
        }
        else {
            if(error){
                await fetchBookStartAsync(bookind)
            }
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