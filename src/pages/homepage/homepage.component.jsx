import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BookDetails from "../../components/book-details/book-details.component";
import Header from "../../components/header/header.component";
import BookTiles from '../../components/book-tiles/book-tiles.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './homepage.styles.scss';

const HomePage = ({ currentUser}) => {
    

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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });

export default connect(mapStateToProps)(HomePage);