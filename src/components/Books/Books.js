import React from 'react';
import './Books.css';

const styles = {
  color: 'rgb(50, 50 , 50)',
  fontSize: '1.25rem',
  lineHeight: '1'
}

const boxStyle = {
 boxShadow: '10px 5px 5px 5px lightgrey',
 lineHeight: '1.5',
 padding: '5px 5px',
 backgroundColor: 'rgb(250 250 250)',
 fontSize: '.75rem'
}


class Books extends React.Component{
  render(){
    const { book } = this.props;
    return (
      <div className="container books-list">
        <div className="books">
          <div className="image-links">
            <img src={book.imageLinks} alt="Book cover should be here" />
          </div>
          <div className="book-list">
            <div className="book-info">
              <h2 className='book-title' style={styles}>{book.title}</h2>
              <p className="book-author" style={styles}>{book.authors}</p>
              {/*<p className="publisher">Publisher: {book.publisher}</p>*/}
            </div>
          </div>
          <div className="book-description">
            <p className="description" style={boxStyle}>{book.description}</p>
            <p className="category" style={boxStyle}>Genre: {book.categories}</p>
              {/*<p className="page-count">Page Count: {book.pageCount}</p> */}
              <p className="book-pubdate" style={boxStyle}>Published: {book.publishedDate}</p>
              <p className="avg-rating" style={boxStyle}>Rating:{book.averageRating}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Books;







