import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Quiz from './pages/Quiz/Quiz'
import ContactUs from './pages/ContactUs/ContactUs'
import MainPage from './pages/MainPage/MainPage'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Interactive from './pages/Interactive/Interactive'



function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/Quiz' element={<Quiz/>}/>
        <Route path='/ContactUs' element={<ContactUs/ >}/>
        <Route path='/' element={<MainPage/ >}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Footer' element={<Footer/>}/>
        <Route path='/Header' element={<Header/>} />
        <Route path='/Interactive' element={<Interactive/>}/>
      </Routes>
    </div>
  )
}

export default App
