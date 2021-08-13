import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './book-details.styles.scss';


import { selectCurrentBook, selectIsBookFetching, selectIsHidden } from '../../redux/books/books.selectors';
import { selectCurrentAuthor,selectIsAuthorFetching } from '../../redux/authors/authors.selectors';

const BookDetails = ({ currentBook, fetching, hidden, fetchingA,currentAuthor } ) =>{


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
                    <h2>
                        {currentBook.Name}
                    </h2>
                    <h3>
                        {currentBook.Genre.join(", ")}
                    </h3>
                    <h3>
                        {currentBook.Author}
                    </h3>
                    <h3>
                        Other Books by this Author
                    </h3>
                    {/*
                        fetchingA
                        ?
                        "still fetching data"
                        :<div>(
                            currentAuthor
                            ?
                            <ul>
                            <li> {currentAuthor.Books.join(", ")} </li>
                            </ul>
                            :
                            "sorry the other books by this author are not available"
                        )
                        </div>
                        
                        */}
                    
                </div>
                : 
                "sorry the details of this book are not available"
            }
            </div>
            }

        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    hidden: selectIsHidden,
    fetching: selectIsBookFetching,
    currentBook: selectCurrentBook,
    currentAuthor: selectCurrentAuthor,
    fetchingA: selectIsAuthorFetching
  });

export default connect(mapStateToProps)(BookDetails);