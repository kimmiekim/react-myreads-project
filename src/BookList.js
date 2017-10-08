import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'

class BookList extends Component {
  render(){
    const { books, shelf } = this.props


    return (
    <div className="list-books">
      <div className="list-books-content">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">None</h2>
          {books.map((book)=> {
            console.log(book)
            if (shelf === ''){
              return <div className="bookshelf-books">
                    {/* <BookStateless book= {book} /> */}
                    <Book book = {book} />
                      {/* <BookStateless book= {book} /> */}
                    </div>

            }
          })}
        </div>


        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
            {books.map((book)=> {
              if (shelf === 'currentlyReading'){
                return <div className="bookshelf-books">
                      {/* <BookStateless book= {book} /> */}
                      <Book book = {book} />
                      </div>
              }
              // console.log(this.book.title, this.book.state)
            })}
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            {books.map((book)=> {
              if (shelf === 'wantToRead'){
                return <div className="bookshelf-books">
                      {/* <BookStateless book= {book} /> */}
                      <Book book = {book} />
                        {/* <BookStateless book= {book} /> */}
                      </div>
              }
              // console.log(this.book.title, this.book.state)
            })}
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            {books.map((book)=> {
              if (shelf === 'read'){
                console.log(shelf)
                return <div className="bookshelf-books">
                      {/* <BookStateless book= {book} /> */}
                      <Book book = {book} />
                      </div>
              }
              // console.log(this.book.title, this.book.state)
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
