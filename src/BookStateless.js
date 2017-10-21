import React from 'react'

const BookStateless = (props) => {

  function handleChange(shelf) {
    const { onChangeBookshelf } = props
    console.log("hello", props)
    onChangeBookshelf(props, shelf)
  }

  const coverStyle = {
    width: 128,
    height: 188,
    backgroundImage: `url("${props.book.imageLinks.thumbnail? props.book.imageLinks.thumbnail : null}")`
  }

  return(
    <li key={props.book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={coverStyle}></div>
          <div className="book-shelf-changer">
            <select onChange={(event)=>{handleChange(event.target.value)}} value={props.book.shelf}>
              <option value="none" >Move to...</option>
              <option value="currentlyReading" >Currently Reading</option>
              <option value="wantToRead" >Want to Read</option>
              <option value="read" >Read</option>
              <option value="none" >None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors && props.book.authors.join(', ')}</div>
      </div>
    </li>
  )
}

export default BookStateless
