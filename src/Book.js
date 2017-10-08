import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'

import Select from 'react-select'
import 'react-select/dist/react-select.css'

class Book extends Component {
  state={
    // state can be read, none, want to read, or currently reading
    shelf: ''
  }

// update the status in BookAPI using .update method
  // changeStatus(book, shelf){
  //   BooksAPI.update(book, shelf).then((book, shelf) => {
  //     book.setState(state => ({
  //       status : shelf
  //     }))
  //   })
  //   console.log(this, shelf)
  // }

  handleChange(e){
    this.setState({ shelf: e['value'] })
    console.log("this?", this)
  }



  render(){
    const { book } = this.props
    const { shelf } = this.state
    console.log("book", book.state)

    const options = [
      { value: 'currentlyReading', label: 'currentlyReading'},
      { value: 'wantToRead', label: 'wantToRead'},
      { value: 'read', label: 'read'},
      { value: 'none', label: 'none'}
    ]

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
            <div className="book-shelf-changer">

              <Select
                value=""
                options={options}
                onChange={(e)=>this.handleChange(e)}
              />


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
