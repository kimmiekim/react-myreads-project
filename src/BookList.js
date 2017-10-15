import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'
import Book from './Book'

class BookList extends Component {

  componentDidMount() {
    this.props.listBooks()
  }

  render(){
    const { books, onHandleChange } = this.props
    const currentlyReading = books.filter((book) => {book.shelf === 'currentlyReading'})
    const wantToRead = books.filter((book) => {book.shelf === 'wantToRead'})
    const read = books.filter((book) => book.shelf === 'read' )

    return (
    <div className="list-books">
      <div className="list-books-content">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className='list-books-content'>
          <BookShelf books={read} onHandleChange={onHandleChange} title='Read' />
          <BookShelf books={currentlyReading} onHandleChange={onHandleChange} title='Currently Reading' />
          <BookShelf books={wantToRead} onHandleChange={onHandleChange} title='Want To Read' />
        </div>

      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
    )
  }
}

export default BookList
