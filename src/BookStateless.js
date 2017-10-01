import React from 'react'

const BookStateless = (props) => {
  return(
    <li key={props.book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${props.book.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            {/* <select>
              <option value="none" onChange={this.changeStatus}>Move to...</option>
              <option value="currentlyReading" onChange={this.changeStatus}>Currently Reading</option>
              <option value="wantToRead" onChange={this.changeStatus}>Want to Read</option>
              <option value="read" onChange={this.changeStatus}>Read</option>
              <option value="none" onChange={this.changeStatus}>None</option>
            </select> */}
          </div>
          {console.log(props.book.title)}
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
    </li>
  )
}

export default BookStateless
