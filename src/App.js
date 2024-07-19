import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Login from './Login'
import Home from './Home'
import './App.css';

const App = () => (
  <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </Routes>
    </BrowserRouter>
  </>
)

export default App