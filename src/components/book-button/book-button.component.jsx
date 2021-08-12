import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './book-button.styles.scss';

import { toggleBookHidden } from '../../redux/books/books.actions';
import { selectCurrentBook } from '../../redux/books/books.selectors';
import { fetchBookStartAsync } from '../../redux/books/books.actions';

const Book =({name, fetchBookStartAsync, toggleBookHidden})=>{

    const stuff = async ()=> {
        
        fetchBookStartAsync(name)
        toggleBookHidden()
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
    currentBook: selectCurrentBook
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Book);