import React from 'react';
import Book from '../book-button/book-button.component';

import './book-list.styles.scss';

const BookList = ({booklist})=> {

    return (
        <div className='book-list'>
        {
            booklist.map(book => (
                <Book name={book}/>
            ))
        }    
        </div> 
    )
}

export default BookList;