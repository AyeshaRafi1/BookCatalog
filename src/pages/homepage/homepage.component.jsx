import React from 'react';

import BookDetails from "../../components/book-details/book-details.component";
import Header from "../../components/header/header.component";
import BookTiles from '../../components/book-tiles/book-tiles.component';


import './homepage.styles.scss';

const HomePage = () => {
    

    return(
        <div>
            <Header/>
            <div className='page'>
                <BookTiles/>
                <BookDetails/>
            </div>      
        </div>   
    );
};

export default HomePage;