import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import BookDetails from "../../components/book-details/book-details.component";
import BookList from "../../components/book-list/book-list.component";
import Header from "../../components/header/header.component";

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './homepage.styles.scss';

const HomePage = ({ currentUser}) => {
    

    return(
        <div>
            <Header/>
            <div className='page'>
                <div className='left-container'>
                    <h1>
                        {currentUser? `${currentUser.displayName.split(' ')[0]}'s Reading List`: null}
                    </h1>
                
                {currentUser? <BookList booklist={currentUser.bookList}/> : null}
                
                </div>
                <BookDetails/>
            </div>
        </div>   
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });

export default connect(mapStateToProps)(HomePage);