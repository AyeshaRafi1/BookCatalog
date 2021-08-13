import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './book-details.styles.scss';


import { selectCurrentBook, selectIsBookFetching, selectIsHidden, selectIsAuthorFetching,selectOtherBooksByAuthor} from '../../redux/books/books.selectors';


const BookDetails = ({ currentBook, fetching, hidden, fetchingA,otherBooksByAuthor } ) =>{


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

        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    hidden: selectIsHidden,
    fetching: selectIsBookFetching,
    currentBook: selectCurrentBook,
    otherBooksByAuthor: selectOtherBooksByAuthor,
    fetchingA: selectIsAuthorFetching
  });

export default connect(mapStateToProps)(BookDetails);