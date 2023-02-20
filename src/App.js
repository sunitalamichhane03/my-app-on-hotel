import React from 'react'
import Navbar from './components/Navbar/Navbar';
import './App.css'
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
     
      <Router>
      <Navbar />
      <Routes>
        <Route path='/'exact element={<Home/>}></Route>
      </Routes>
      </Router>
    </>
  )
}



export default App;
