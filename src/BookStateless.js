import React from 'react'

const BookStateless = (props) => {

function handleChange(e) {
  console.log("handle change clicked")
}
  return(
    <li key={props.book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${props.book.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" onChange={(e)=>{this.handleChange(e)}}>Move to...</option>
              <option value="currentlyReading" onChange={(e)=>{this.handleChange(e)}}>Currently Reading</option>
              <option value="wantToRead" onChange={(e)=>{this.handleChange(e)}}>Want to Read</option>
              <option value="read" onChange={(e)=>{this.handleChange(e)}}>Read</option>
              <option value="none" onChange={(e)=>{this.handleChange(e)}}>None</option>
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
