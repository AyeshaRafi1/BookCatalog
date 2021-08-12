import React from 'react';
import Book from '../book-button/book-button.component';

import './book-list.styles.scss';

const BookList = ({booklist})=> {

    return (
        <div className='book-list'>
        {
            booklist? (booklist.map((book, ind) => (
                <Book key={ind}  name={book}/>
            )))
            :
            null
        }    
        </div> 
    )
}

export default BookList;