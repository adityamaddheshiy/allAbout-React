import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import NoRecordes from './pages/NoRecordes'
import Men from './pages/Men'
import Women from './pages/Women'

const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Product' element={<Product />}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
        </Route>
        <Route path='*' element={<NoRecordes />} />
      </Routes>


      <Footer />

    </div>
  )
}

export default App
