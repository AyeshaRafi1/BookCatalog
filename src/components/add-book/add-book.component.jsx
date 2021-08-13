import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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

  handleSubmit = async event => {
    event.preventDefault();

    const { bookName,genre, author } = this.state;

    try {
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

export default AddBook;