import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import { Nav } from './components/Nav'
import { useRouters } from './components/routes'
import { useAuth } from './components/auth'
import { AuthContext } from './components/authContext'


export const App = () => {
  const { login, logout, userId, token } = useAuth()
  const isAuth = !!token
  const routers = useRouters(isAuth)
  return (
    <AuthContext.Provider value={{ login, logout, userId, token, isAuth }}>
      <Router>
        <Nav />
        {routers}
      </Router>
    </AuthContext.Provider>
  )
}


