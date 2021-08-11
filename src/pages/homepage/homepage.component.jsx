import React, { useState } from "react";

import './homepage.styles.scss';

const HomePage = () => {
    const [booklist, setBooklist]= useState(['Harry Potter','percy jackson','percy jackson','percy jackson','percy jackson']);

    return(
        <div className='page'>
            <div className='left-container'>
                <h1>
                    Ayesha's Reading List
                </h1>
                <div className='book-list'>
                {
                    booklist.map(book => (
                        <button className='book'> {book}</button>
                    ))
                }    
                </div> 
            </div>
            <div className='book-details hidden'>
                <h2 className='title'>
                    Harry Potter
                </h2>
                <h3 className='genere'>
                    sci-fi
                </h3>
                <h3 className='author'>
                    J k Rowling
                </h3>
                <h3 className='otherbooks'>
                    other books by this Auther
                </h3>
                <ul>
                    <li>harry potter part 2</li>
                </ul>

            </div>
            
        </div>
        
    );
};

export default HomePage;