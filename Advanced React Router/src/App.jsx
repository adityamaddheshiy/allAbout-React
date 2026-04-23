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
import Kids from './pages/Kids'
import Coursces from './pages/Coursces'
import CoursesDetailed from './pages/CoursesDetailed'
import NavBar2 from './components/NavBar2'

const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Navbar />
      <NavBar2/>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/coursces'element={<Coursces/>} />
        <Route path='/coursces/:id'element={<CoursesDetailed/>} />
      

        
        <Route path='/Product' element={<Product />}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
        </Route>
        <Route path='*' element={<NoRecordes />} />
      </Routes>


      <Footer />

    </div>
  )
}

export default App
