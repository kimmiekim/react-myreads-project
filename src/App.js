import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
// import BookList from './BookList'
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

  componentDidMount(){
    BooksAPI.getAll().then((books)=> {
      this.setState({ books: books })
      console.log(books)
    })
  }


  render() {
    return (
      <div className="App">
        <Route exact path="/" render={()=>(
          <Book books={this.state.books}/>
        )} />
        <Route path="/search" render={()=>(
          <Search books={this.state.books}/>
        )} />

      </div>
      )
    }
  }

export default BooksApp
