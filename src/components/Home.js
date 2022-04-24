import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from '../api/BooksAPI'

function Home () {
    const [books, setBooks] = useState([])

    useEffect (() => {
        BooksAPI.getAll().then((data) => setBooks(data))
    }, [])
    
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf title='Want To Read' shelf='wantToRead' books={books}/>
                    <BookShelf title='Currently Reading' shelf='currentlyReading' books={books}/>
                    <BookShelf title='Read' shelf='read' books={books}/> 
                </div>
            </div>
            <div className="open-search">
                <Link to="/search"><button>Add a book</button></Link>
            </div>
        </div>
    )
}

export default Home