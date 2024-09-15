import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/Landing'
import Login from '../screens/Login'
import Register from '../screens/Register'
import { useEffect, useState } from 'react'

function Screens() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/login" element={<Login/>} />
        
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Screens