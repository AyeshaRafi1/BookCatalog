import React from 'react';
import { connect } from 'react-redux';

import {FaPlusCircle} from "react-icons/fa"
import {IconContext} from "react-icons"

import { toggleAddBook } from '../../redux/user/user.actions';

import './add-book-button.styles.scss';

const AddBookButton = ({toggleAddBook}) => {
    return(
        <IconContext.Provider value={{ style: {fontSize: '55px', color: "rgb(175,56,89)"}}}>
            <div className="Add-book-icon" onClick={toggleAddBook} >
                <FaPlusCircle/>
            </div>
        </IconContext.Provider>
        
    )

}

const mapDispatchToProps = dispatch => ({
    toggleAddBook: ()=> dispatch(toggleAddBook())

})
export default connect(null,mapDispatchToProps)(AddBookButton);