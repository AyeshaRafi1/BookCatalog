import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { updateBooks, setCurrentUser } from '../../redux/user/user.actions';

import { findInCollection,createNewAuthor,addBookToAuthor, createNewBook} from '../../firebase/firebase.utils';

import './add-book.styles.scss';

class AddBook extends React.Component {
  constructor() {
    super();

    this.state = {
      bookName: '',
      genre: '',
      author: ''
    };
  }
  //getting the book name genre and author entered by the user
  // getting the props
  // checking to see if the book already does not exist in the book list that the user has
  // checking to see if the book already exits in out books collection or not
  // if the book does not exist we need to check if the author exists or not. if the book exists we need to do nothing else
  // if author Id does not exist then we need to create a new document for that author
  // finally we need to add the book to the author document
  // now that we have the author Id we need to put the book data in the books collection
  // finally we need to add the the book to our list and update the books list in the user

  handleSubmit = async event => {
    event.preventDefault();

    const { bookName,genre, author } = this.state;

    const {currentUser , updateBooks, setCurrentUser}= this.props

    try {
      
      if (currentUser.bookList.includes(bookName))
      {
        alert("you already have this book in your list")
        this.setState({
          bookName: '',
          genre: '',
          author: ''
        });
        return;
      }

      const allBooks = [...currentUser.bookList,bookName]

      let copyCurrentUser= {
        ...currentUser
      }
      copyCurrentUser.bookList= allBooks

      setCurrentUser(copyCurrentUser)

      let bookId = await findInCollection("books", bookName)
  

      let authorId
      if(!bookId){

        authorId= await findInCollection("Authors", author)

        if(!authorId){
          authorId= await createNewAuthor(author)
        }
        await addBookToAuthor(authorId,bookName)

        bookId= await createNewBook (bookName,genre, author , authorId)
      }
      
      const allBookIds= [...currentUser.bookIDs, bookId]

      copyCurrentUser.bookIDs=allBookIds

      updateBooks(copyCurrentUser)
      
      // clearing the values that the user entred from the input field
      this.setState({
        bookName: '',
        genre: '',
        author: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { bookName,genre, author } = this.state;

    return (
      <div className='add-book'>
        
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            caller="addbook"
            type='text'
            name='bookName'
            value={bookName}
            onChange={this.handleChange}
            label='Book Name'
            required
          />
          <FormInput
            caller="addbook"
            type='text'
            name='genre'
            value={genre}
            onChange={this.handleChange}
            label='Genre'
            required
          />
          <FormInput
            caller="addbook"
            type='text'
            name='author'
            value={author}
            onChange={this.handleChange}
            label='Author'
            required
          />
          <CustomButton type='submit'>ADD BOOK</CustomButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  updateBooks: user => dispatch(updateBooks(user)),
  setCurrentUser: user => dispatch(setCurrentUser(user))

})
export default connect(mapStateToProps,mapDispatchToProps)(AddBook);