# MyReads Project

A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

## How To Run

To get started:

* clone this repository
* install all project dependencies with `npm install`
* start the development server with `npm start`
* access the project from url: http://localhost:3000/

## File Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md 
├── package.json 
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    ├── api
    │   └── BooksAPI.js
    ├── components 
    │   ├── BookShelf.js
    │   ├── Home.js
    │   ├── NoMatch.js
    │   └── Search.js
    ├── App.css 
    ├── App.js 
    ├── App.test.js 
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css 
    └── index.js 
```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
