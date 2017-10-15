import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'

class BookList extends Component {

  componentDidMount() {
    this.props.listBooks()
  }

  render(){
    const { books } = this.props
    const currentlyReading = books.filter((book) => {book.shelf === 'currentlyReading'})
    const wantToRead = books.filter((book) => {book.shelf === 'wantToRead'})
    const read = books.filter((book) => book.shelf === 'read' )

    return (
    <div className="list-books">
      <div className="list-books-content">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          {books.map((book)=> {
            if (book.shelf === 'read'){
              return <div className="bookshelf-books">
                    {/* <BookStateless book= {book} /> */}
                    <Book key={book.id} book = {book} onChangeBookshelf = {this.props.onHandleChange}/>
                      {/* <BookStateless book= {book} /> */}
                    </div>
            }
          })}
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">currently Reading</h2>
          {books.map((book)=> {
            if (book.shelf === 'currentlyReading'){
              return <div className="bookshelf-books">
                    {/* <BookStateless book= {book} /> */}
                    <Book key={book.id} book = {book} onChangeBookshelf = {this.props.onHandleChange}/>
                      {/* <BookStateless book= {book} /> */}
                    </div>
            }
          })}
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
