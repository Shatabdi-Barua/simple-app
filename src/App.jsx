import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'

function App() {
 
  return (
    <>
      <Header/>
      <Content />      
      <Footer/>
    </>
  )
}

export default App
