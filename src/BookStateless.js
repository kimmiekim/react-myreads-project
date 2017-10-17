import React from 'react'

const BookStateless = (props) => {

  function handleChange(shelf) {
    const { onChangeBookshelf, book } = this.props
    // e = this.props.book.shelf
    console.log("hello", this.props.book.id)
    onChangeBookshelf(book, shelf)
  }

  return(
    <li key={props.book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${props.book.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(event)=>{handleChange(props)}}>
              <option value="none" disabled >Move to...</option>
              <option value="currentlyReading" >Currently Reading</option>
              <option value="wantToRead" >Want to Read</option>
              <option value="read" >Read</option>
              <option value="none" >None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
    </li>
  )
}

export default BookStateless
