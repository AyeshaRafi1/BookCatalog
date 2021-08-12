import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './book-details.styles.scss';


import { selectCurrentBook, selectIsBookFetching, selectIsHidden } from '../../redux/books/books.selectors';


const BookDetails = ({ currentBook, fetching, hidden } ) =>{


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
                        {currentBook.name}
                    </h2>
                    <h3>
                        {currentBook.genre.join(", ")}
                    </h3>
                    <h3>
                        {currentBook.Author}
                    </h3>
                    <h3>
                        other ooks by this Auther
                    </h3>
                    <ul>
                        <li>harry potter part 2</li>
                    </ul>
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
    currentBook: selectCurrentBook
  });

export default connect(mapStateToProps)(BookDetails);