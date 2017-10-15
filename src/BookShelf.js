import React from 'react'

import BookStateless from './BookStateless'

const BookShelf = (props) => {

  const { books, onHandleChange, title } = props

  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          {books.map((book) => (<BookStateless key={book.id} book={book} onChangeBookshelf={onHandleChange}/>)
        )}
        </div>
    </div>
  )
}

export default BookShelf
