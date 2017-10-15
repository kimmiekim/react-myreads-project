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

  // componentDidMount(){
  listBooks = () => {
    BooksAPI.getAll().then((books)=> {
      this.setState({ books: books })
      console.log(books)
    })
  }

// upon user input, sends the shelf status changes to the database and updates it:
  updateShelf=(book, shelf)=> {
  // console.log("book", book.props.book.shelf)
  // console.log("shelf", book)
    BooksAPI.update(book, shelf).then((data) => {
      console.log("data", shelf)
      this.setState((currentState)=>({
        books: currentState.books.map((b) => {
          if (book.props.book.id === b.id){
            console.log("working??", shelf)
            book.shelf = shelf
          }
          return b

        })
      }))
  })
    // this.setState({ books: e })
    // console.log("e", this.state)

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
