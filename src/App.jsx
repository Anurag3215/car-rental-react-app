import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import AddCar from './components/AddCar'
import Viewcars from './components/Viewcars'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<AddCar/>} />
          <Route path="/view" element={<Viewcars/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App