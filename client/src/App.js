// import logo from './logo.svg';
import './App.css';

import React from 'react'
import { Route, Routes } from 'react-router';
import PostForm from './components/PostForm';
// import Posts from './components/Posts';
// import Navbar from './components/Navbar';
import Parent from './components/Parent';

function App() {
  return (
    <div>
      {/* <Parent/> */}
      {/* <Navbar/> */}
      <Routes>
        <Route path = "/"  element={<Parent/>}>
        </Route>

        <Route path = "/new"  element={<PostForm/>}>
        </Route>

      </Routes>

      
    </div>
  )
}

export default App

