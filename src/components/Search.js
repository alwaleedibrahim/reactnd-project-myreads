import React, {useState} from 'react'
import { Link } from 'react-router-dom' 
import BookShelf from './BookShelf'
import * as BooksAPI from '../api/BooksAPI'

function Search () {

    const [books, setBooks] = useState([])

    function handleChange (e) {
        e.preventDefault()
        e.target.value && 
        BooksAPI.search(e.target.value)
        .then(data => data? setBooks(data) : setBooks([]))
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'>
                    <button className='close-search'>Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={handleChange}/>
                </div>
            </div>
            <div className="search-books-results">
                {books[0]? <BookShelf title="Search results" books={books} shelf="all" updateBooks={() => {}}/> : <p>No Books Found</p>}
            </div>
        </div>
    )
}

export default Search