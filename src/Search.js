import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

// import BookStateless from './BookStateless'
import BookStateless from './BookStateless'

class Search extends Component {
  state={
    query: '',
    books: [],

  }
  componentDidMount() {
    this.props.listBooks();
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    this.props.searchBooks(query)
  }

  updateSearchedBookShelf = (book) => {
    const { bookList} = this.props
    const searchedBook = bookList.find((listedBook) => (listedBook.id === book.id))

    if (searchedBook) {
      book.shelf = searchedBook.shelf
      // console.log("searched book", searchedBook.shelf)

    } else {
      book.shelf = 'none'
    }
    return book
  }

  render() {
    const { query } = this.state
    const { books } = this.props

    let showingBooks
    try {
      if(query){
        const match = new RegExp(escapeRegExp(query), 'i')
        showingBooks = books.filter((book) => match.test(book.title))
      } else {
        showingBooks = books
      }
      showingBooks.map((book) => { this.updateSearchedBookShelf(book)})
      showingBooks.sort(sortBy('title'))
    }
    catch (error){
      // alert("title doesn't exist")
      // this.setState({query : ''})
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input value={query}
              onChange={(event)=> this.updateQuery(event.target.value)}
              type="text"
              placeholder="Search by title or author"
            />
            {/* {JSON.stringify(this.state)} */}
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <BookStateless key={book.id}
                book={book}
                onChangeBookshelf={(book, shelf) => {
                  this.props.onHandleChange(book, shelf)
                }}/>
              )
            )}
          </ol>
        </div>
      </div>
    )


  }
}

export default Search
