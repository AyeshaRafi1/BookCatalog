import React from 'react';

import './book-details.styles.scss';

const BookDetails = () =>{
    return (
        <div className='book-details'>
            <h2>
                Harry Potter
            </h2>
            <h3>
                sci-fi
            </h3>
            <h3>
                J k Rowling
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

export default BookDetails;