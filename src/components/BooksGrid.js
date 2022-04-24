import React from 'react'
import * as BooksAPI from "../api/BooksAPI"

function BooksGrid(props) {

    function handleSelect (e, book) {
        e.preventDefault()
        BooksAPI.update(book, e.target.value)
    }

    return (
        <ol className="books-grid">
            {props.books.map(book => (book.shelf === props.shelf || props.shelf === 'all') && (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                                <select onChange={e => handleSelect(e, book)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                    </div>
                </li>
            ))}
        </ol>
    )
}

export default BooksGrid
