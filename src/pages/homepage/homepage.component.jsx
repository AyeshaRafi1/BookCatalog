import React, { useState } from "react";
import BookDetails from "../../components/book-details/book-details.component";
import BookList from "../../components/book-list/book-list.component";

import './homepage.styles.scss';

const HomePage = () => {
    const [booklist, setBooklist]= useState(['Harry Potter','percy jackson','percy jackson','percy jackson','percy jackson']);

    return(
        <div className='page'>
            <div className='left-container'>
                <h1>
                    Ayesha's Reading List
                </h1>
               <BookList booklist={booklist}/>
            </div>
            <BookDetails/>
        </div>
        
    );
};

export default HomePage;