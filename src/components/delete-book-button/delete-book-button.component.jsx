import React from 'react';

import {FaTrash} from "react-icons/fa"
import {IconContext} from "react-icons"

import './delete-book-button.styles.scss';
import { toggleDeleteBook } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const DeleteBookButton = ({toggleDeleteBook}) => {
    return(
        <IconContext.Provider value={{ style: {fontSize: '45px', color: "rgb(255,255,255)"}}}>
            <div className="delete-book-icon" onClick={toggleDeleteBook}>
                <FaTrash/>
            </div>
        </IconContext.Provider>
        
    )

}

const mapDispatchToProps = dispatch => ({ 
    toggleDeleteBook: ()=>dispatch(toggleDeleteBook())

})


export default connect(null,mapDispatchToProps)(DeleteBookButton);