import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Select from 'react-select'
import 'react-select/dist/react-select.css'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired
  }

  handleChange(e){
    const { onChangeBookshelf } = this.props
    // e = this.props.book.shelf
    console.log("hello", e)
    onChangeBookshelf(this, e)
  }

  render(){
    const { book } = this.props
    // const { shelf } = this.state
    console.log("book", book.state)
    const coverStyle = {
      width: 128,
      height: 188,
      backgroundImage: `url("${book.imageLinks.thumbnail}")`
    }

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={coverStyle}></div>
            <div className="book-shelf-changer">
              <select onChange={(event)=>{this.handleChange(event.target.value)}}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>

    )
  }
}

export default Book
