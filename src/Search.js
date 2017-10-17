import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

// import BookStateless from './BookStateless'
import Book from './Book'

class Search extends Component {
  state={
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim()})
    console.log("this", query)
    this.props.searchBooks(query)
  }
  render() {
    const { query } = this.state
    console.log("testing query", typeof query)
    const { books } = this.props

    let showingBooks

    // filter the list with search query
    if(query){
      console.log("query length", query.length)
      const match = new RegExp(escapeRegExp(query), 'i')
      console.log("match",match)
      showingBooks = books.filter((book) => match.test(book.title))
    } else {
      showingBooks = books
    }
    showingBooks.sort(sortBy('title'))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
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
                  <Book key={book.id} book={book} onChangeBookshelf={this.props.onHandleChange}/>
              )
            )}
          </ol>
        </div>
        {console.log(showingBooks)}
      </div>



    )
  }
}

export default Search
