import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

// import BookStateless from './BookStateless'
import BookStateless from './BookStateless'

class Search extends Component {
  state={
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query })
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
                  <BookStateless key={book.id} book={book} onChangeBookshelf={this.props.onHandleChange}/>
              )
            )}
          </ol>
        </div>
        {/* {console.log(showingBooks)} */}
      </div>



    )
  }
}

export default Search
