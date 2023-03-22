import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Discover from './components/discover'
import Form from './components/form'
import Blog from './components/blog'
import Footer from './components/footer'
import Featured from './components/featured'


function App() {
  return (
    <>
      <div className='flex flex-col w-full'>
        <Navbar />
        <Hero />
        <Featured />
        <Discover />
        <Form />
        <Blog />
        <Footer />
      </div>
    </>
  )
}


export default App