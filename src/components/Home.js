import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from '../api/BooksAPI'

function Home() {
    const [books, setBooks] = useState([])

    const shelves = [
        { title: 'Want To Read', shelf: 'wantToRead' },
        { title: 'Currently Reading', shelf: 'currentlyReading' },
        { title: 'Read', shelf: 'read' }
    ]

    function updateBooks() {
        return BooksAPI.getAll().then((data) => {
            setBooks(data)
            return data
        })
    }

    useEffect(() => {
        updateBooks()
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {shelves.map(shelf =>
                        <BookShelf key={shelf.shelf} title={shelf.title} shelf={shelf.shelf} books={books} updateBooks={updateBooks} />
                    )}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search"><button>Add a book</button></Link>
            </div>
        </div>
    )
}

export default Home