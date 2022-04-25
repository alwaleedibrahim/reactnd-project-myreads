import React from 'react'
import * as BooksAPI from "../api/BooksAPI"

function BookShelf(props) {

    function handleSelect(e, book) {
        e.preventDefault()
        BooksAPI.update(book, e.target.value)
        .then(() => props.updateBooks())
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book => (book.shelf === props.shelf || props.shelf === 'all') && (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : 'https://via.placeholder.com/128x193.png'}")` }}></div>
                                    <div className="book-shelf-changer">
                                        <select value={book.shelf || 'none'} onChange={e => handleSelect(e, book)}>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading" >Currently Reading</option>
                                            <option value="wantToRead" >Want to Read</option>
                                            <option value="read" >Read</option>
                                            <option value="none" >None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default BookShelf