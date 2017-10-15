import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookList from './BookList'
import Book from './Book'


import { Route } from 'react-router-dom'

class BooksApp extends React.Component {


  state = {
    books : []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  listBooks = () => {
    BooksAPI.getAll().then((books)=> {
      this.setState({ books: books })
      console.log(books)
    })
  }

// upon user input, sends the shelf status changes to the database and updates it:
  updateShelf=(book, shelf)=> {
    BooksAPI.update(book, shelf).then((data) => {
      console.log("data", book.id)
      this.setState((currentState)=>({
        books: currentState.books.map((b) => {
          if (book.id === b.id){
            console.log("working??", shelf)
            b.shelf = shelf
          }
          return b

        })
      }))
    })
  }

  render() {
    return (
      <div className="App">
        <Route path="/search" render={()=>(
          <Search books={this.state.books} onHandleChange={ this.updateShelf } />
        )} />
        <Route exact path="/" render={()=>(
          <BookList books={this.state.books} onHandleChange={ this.updateShelf } listBooks = {this.listBooks} />

        )} />

      </div>
      )
    }
  }

export default BooksApp
