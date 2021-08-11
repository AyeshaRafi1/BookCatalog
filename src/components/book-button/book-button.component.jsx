import React from 'react';

import './book-button.styles.scss';

const Book =({name})=>{

    return (
        <button className='book'> {name}</button>
    )
}

export default Book;