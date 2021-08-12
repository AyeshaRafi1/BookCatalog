import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './book-button.styles.scss';

import { toggleBookHidden,fetchBookStartAsync } from '../../redux/books/books.actions';
import { selectCurrentBook ,selectIsErrorWhileFetching,selectIsHidden} from '../../redux/books/books.selectors';

const Book =({name, fetchBookStartAsync, toggleBookHidden, currentBook, error, hidden})=>{

    const stuff = async ()=> {
        
        if (currentBook){
            if (currentBook.name === name){
                toggleBookHidden()
            }
            else if (hidden) {
                await fetchBookStartAsync(name)
                toggleBookHidden()
            }
            else {
                await fetchBookStartAsync(name)
            }
        }
        else {
            if(error){
                await fetchBookStartAsync(name)
            }
            else{
                await fetchBookStartAsync(name)
                toggleBookHidden()

            }
        }     
        
        
    }
    return (
        <button className='book'onClick={stuff}> {name}</button>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleBookHidden: ()=> dispatch(toggleBookHidden()),
    fetchBookStartAsync: (name) => dispatch(fetchBookStartAsync(name))

})

const mapStateToProps = createStructuredSelector({
    currentBook: selectCurrentBook,
    error: selectIsErrorWhileFetching,
    hidden: selectIsHidden
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Book);