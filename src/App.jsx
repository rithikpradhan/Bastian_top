import React, { useState } from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Menu from './components/Menu.jsx'
import Ourstory from './pages/Ourstory.jsx'
import ScrollToTop from './pages/ScrollToTop.jsx'
import { Routes, Route} from "react-router-dom";
import './App.css'

function App() {

  const [branch , setBranch] = useState("main");

  return (
    <div className='App'>

      <ScrollToTop />

      <Routes>
        {/* Home Page */}
      <Route
         path='/'
         element={
          <>
          
          <Hero branch={branch} setBranch={setBranch}/>

          <main>
            <About branch={branch}/>

            <Gallery branch={branch}/>

            <Menu branch={branch}/> 

          </main>

          </>

        }
      />

        {/* Seprate Pages */}
        <Route path='/ourstory' element={
            <Ourstory />
         
          } />

      </Routes>
    </div>
  )


}

export default App
