import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './confirm-delete.styles.scss';

const ConfirmDelete = () => {
    return (
        <div className="confirm-delete">
            <p>Are you sure you want to delete this book?</p>
            <div className="confirm buttons">
                <CustomButton>yes</CustomButton>
                <CustomButton>no</CustomButton>
            </div>
        </div>
        
    )


}

export default ConfirmDelete;