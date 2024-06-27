import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<h1>This is a Homepage</h1>} />
        <Route path = '/register' element = {    <form action="">
     Username <input type='text'/> <br /> <br/>
     Password <input type ='text'/>
     </form>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
