import React from 'react'
//import * as BooksAPI from './api/BooksAPI'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import NoMatch from './components/NoMatch'
import './App.css'

function BooksApp () {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  )
}

export default BooksApp
