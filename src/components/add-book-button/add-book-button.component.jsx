import React from 'react';
import {FaPlusCircle} from "react-icons/fa"
import {IconContext} from "react-icons"

import './add-book-button.styles.scss';

const AddBookButton = () => {
    return(
        <IconContext.Provider value={{ style: {fontSize: '70px', color: "rgb(175,56,89)"}}}>
            <div className="Add-book-icon">
                <FaPlusCircle/>
            </div>
        </IconContext.Provider>
        
    )


}

export default AddBookButton;