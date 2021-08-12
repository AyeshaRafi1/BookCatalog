import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getBookDetails } from '../../firebase/firebase.utils';

import './book-button.styles.scss';

import { setCurrentBook, toggleBookHidden } from '../../redux/books/books.actions';
import { selectCurrentBook } from '../../redux/books/books.selectors';

const Book =({name, toggleBookHidden})=>{

    const stuff = ()=> {
        toggleBookHidden()
    }
    return (
        <button className='book'onClick={stuff}> {name}</button>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleBookHidden: ()=> dispatch(toggleBookHidden()),
    setCurrentBook: book => dispatch(setCurrentBook(book))    
})

const mapStateToProps = createStructuredSelector({
    currentBook: selectCurrentBook
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Book);