import React, { useState } from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Menu from './components/Menu.jsx'

import './App.css'

function App() {

  const [branch , setBranch] = useState("main");

  return (
    <div className='App'>

      <Hero branch={branch} setBranch={setBranch}/>

      <main>

        <About branch={branch}/>
        <Gallery branch={branch}/>
        <Menu branch={branch}/> 

      </main>
 

     
    </div>
  )


}

export default App
