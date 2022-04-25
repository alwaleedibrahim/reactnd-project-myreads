import React, {useState, useEffect} from 'react'
import { Link, useSearchParams } from 'react-router-dom' 
import BookShelf from './BookShelf'
import * as BooksAPI from '../api/BooksAPI'

function Search () {

    const [books, setBooks] = useState([])

    const [savedBooks, setSavedBooks] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()

    function updateBooks() {
        return BooksAPI.getAll().then((data) => {
            setSavedBooks(data)
            return data
        })
    }

    function handleChange (e) {
        e.preventDefault()
        setSearchParams({q: e.target.value})
    }

    useEffect(() => {
        const query = searchParams.get('q')
        query? (BooksAPI.search(query)
        .then(data => data? setBooks(data) : setBooks([])))
        : setBooks([])
        updateBooks()
    }, [searchParams.savedBooks])

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'>
                    <button className='close-search'>Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={handleChange} value={searchParams.get('q') || ""}/>
                </div>
            </div>
            <div className="search-books-results">
                {books[0]? <BookShelf title="Search results" books={books} shelf="all" savedBooks={savedBooks} updateBooks={updateBooks}/> : searchParams.get('q')? <p>No Books Found</p> : ""}
            </div>
        </div>
    )
}

export default Search