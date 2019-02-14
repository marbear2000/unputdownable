import React from 'react';
import './Books.css';

class Books extends React.Component{
  render(){
    const { book } = this.props;
    return (
      <div className="container books-list">
        <div className="books">
          <div className="image-links">
            <img src={book.imageLinks} alt="book cover"/>
          </div>
          <div className="book-list">
            <div className="book-info">
              <h2 className='book-title'>{book.title}</h2>
              <p className="book-author">{book.authors}</p>
              <p className="book-pubdate">Published: {book.publishedDate}</p>
              <p className="publisher">Publisher: {book.publisher}</p>
            </div>
            <div className="book-details">
              <p className="category">Genre: {book.categories}</p>
              <p className="page-count">Page Count: {book.pageCount}</p>
              <p className="avg-rating">Rating: {book.averageRating}</p>
            </div>
          </div>
          <div className="book-description">
            <p className="description">{book.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Books;







