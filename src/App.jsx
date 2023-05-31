import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
    <Navbar/>
   
   <Hero/>
    </div>
  )
}

export default App
