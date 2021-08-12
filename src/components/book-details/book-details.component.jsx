import React from 'react';
import { connect } from 'react-redux';
import './book-details.styles.scss';


const BookDetails = ({hidden}) =>{
    return (
        <div className={`book-details ${hidden? "hidden": ""}`}>
            <h2>
                Harry Potter
            </h2>
            <h3>
                sci-fi
            </h3>
            <h3>
                J k Rowling
            </h3>
            <h3>
                other books by this Auther
            </h3>
            <ul>
                <li>harry potter part 2</li>
            </ul>

        </div>
    )
}

const mapStateToProps = ({book : {hidden}}) => ({
    hidden
})

export default connect(mapStateToProps)(BookDetails);