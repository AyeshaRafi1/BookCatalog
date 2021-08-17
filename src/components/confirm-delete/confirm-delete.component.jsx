import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';

import './confirm-delete.styles.scss';

import { toggleDeleteBook, toggleBookHidden } from '../../redux/books/books.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCurrentBook } from '../../redux/books/books.selectors'; 
import { updateBooks } from '../../redux/user/user.actions';


const ConfirmDelete = ({toggleDeleteBook,toggleBookHidden,currentUser,currentBook,updateBooks}) => {

    const removeBookAndHideBookDetails = () =>{

        // getting the index of the current book that we want to delete
        const index = currentUser.bookList.indexOf(currentBook.Name)

        // filtered books is an array of books that does not include the book we wanna delete
        const filteredBooks = currentUser.bookList.filter((value) => { 
            return value !== currentBook.Name;
        });

        // removing the selected book ID from the list of book IDs using the splice method
        let filteredIds= [...currentUser.bookIDs]
        filteredIds.splice(index, 1)


        // creating a shallow copy of the current user so that react renders the new state
        let copyCurrentUser= {
            ...currentUser
        }

        copyCurrentUser.bookList= filteredBooks
        copyCurrentUser.bookIDs=filteredIds
        // updating current user
        updateBooks(copyCurrentUser)


        toggleBookHidden()
    }

    return (
        <div className="confirm-delete">
            <p className="confirm-delete-text">Are you sure you want to delete this book?</p>
            <div className="confirm buttons">
                <CustomButton onClick={removeBookAndHideBookDetails} >yes</CustomButton>
                <CustomButton onClick={toggleDeleteBook} >no</CustomButton>
            </div>
        </div>
        
    )


}

const mapDispatchToProps = dispatch => ({ 
    toggleDeleteBook: ()=>dispatch(toggleDeleteBook()),
    toggleBookHidden: ()=>dispatch(toggleBookHidden()),
    updateBooks: user =>dispatch(updateBooks(user))

})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    currentBook: selectCurrentBook
  });


export default connect(mapStateToProps,mapDispatchToProps)(ConfirmDelete);