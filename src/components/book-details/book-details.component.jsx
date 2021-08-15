import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './book-details.styles.scss';


import { selectCurrentBook, selectDeleteBook, selectIsBookFetching, selectIsHidden, selectIsAuthorFetching,selectOtherBooksByAuthor} from '../../redux/books/books.selectors';
import DeleteBookButton from '../delete-book-button/delete-book-button.component';
import ConfirmDelete from '../confirm-delete/confirm-delete.component';


const BookDetails = ({ currentBook, fetching, hidden, fetchingA,otherBooksByAuthor ,deleteBook } ) =>{


    return (
        <div className={`book-details ${hidden? "hidden": ""}`}>
            {fetching
            ?
            "still fetching data"
            :
            <div>
            {
                currentBook
                ?
                <div>
                    <h2 className="book-title">
                        {currentBook.Name}
                    </h2>
                    <h4 className="book-info">
                        {currentBook.Genre.join(", ")}
                    </h4>
                    <h4 className="book-info">
                        {currentBook.Author}
                    </h4>
                    <h4 className="book-info">
                        Other Books by this Author
                    </h4>
                    {
                        fetchingA
                        ?
                        "still fetching data"
                        :<div>{
                            otherBooksByAuthor
                            ?
                            <ul>
                                {otherBooksByAuthor.map((name,id) => (
                                    <li key={id}> {name} </li>
                                    ))
                                }
                            </ul>
                            :
                            "sorry the other books by this author are not available"
                            }
                        </div>
                        
                        }
                    
                </div>
                : 
                "sorry the details of this book are not available"
            }
            </div>
            }
            <div className="delete-book-button-display">
            
            { deleteBook?<ConfirmDelete/>:null}
            <DeleteBookButton/>
            </div>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    hidden: selectIsHidden,
    fetching: selectIsBookFetching,
    currentBook: selectCurrentBook,
    otherBooksByAuthor: selectOtherBooksByAuthor,
    fetchingA: selectIsAuthorFetching,
    deleteBook:selectDeleteBook
  });

export default connect(mapStateToProps)(BookDetails);