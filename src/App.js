import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookList from './BookList'



import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books : []
  }

  listBooks = () => {
    BooksAPI.getAll().then((books)=> {
      this.setState({ books: books })
      // console.log(books)
    })
  }
  searchBooks = (query) => {
    BooksAPI.search(query, 30).then((books)=> {
      this.setState({ books: books })
    })
    console.log(query)
  }

// upon user input, sends the shelf status changes to the database
// and updates it:
  updateShelf=(props, shelf)=> {
    console.log("book", props.book)
    BooksAPI.update(props.book, shelf).then((data) => {
      console.log("data", data)
      this.setState((currentState)=>({
        books: currentState.books.map((b) => {
          if (props.book.id === b.id){
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
          <Search books={this.state.books} onHandleChange={this.updateShelf} searchBooks={this.searchBooks}/>
        )} />
        <Route exact path="/" render={()=>(
          <BookList books={this.state.books} onHandleChange={this.updateShelf} listBooks={this.listBooks} />
        )} />
      </div>
      )
    }
  }

export default BooksApp
