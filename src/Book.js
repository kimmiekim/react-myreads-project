import React, { Component } from 'react'

class Book extends Component {
  state={
    // state can be read, none, want to read, or currently reading
    status: ''
  }
  changeStatus = (val)=> ({ status: val})
  // console.log(val)


  render(){
    const { books } = this.props
      // const book = this.props.books
      // const book = book.map((book)=> ({book}))
      console.log("books",books)
    return(
      <ol className="books-grid">
        {books.map((book)=> {
          return (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="none" onChange={this.changeStatus}>Move to...</option>
                      <option value="currentlyReading" onChange={this.changeStatus}>Currently Reading</option>
                      <option value="wantToRead" onChange={this.changeStatus}>Want to Read</option>
                      <option value="read" onChange={this.changeStatus}>Read</option>
                      <option value="none" onChange={this.changeStatus}>None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          )
        })}
      </ol>
    )
  }
}

export default Book
