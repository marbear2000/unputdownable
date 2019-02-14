import React from 'react';
import './BooksList.css';
import Books from '../Books/Books';

class BooksList extends React.Component {
  render() {
    return (
      <div className='books-list'>
       {
        this.props.books.map(book => {
        return <Books  key={book.id} book={book} />;
        })
       }
      </div>
    );
  }
}

export default BooksList;
