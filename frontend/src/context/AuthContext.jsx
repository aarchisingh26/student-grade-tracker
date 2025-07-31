import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const navigate = useNavigate()

  const login = (newToken) => {
    setToken(newToken)
    localStorage.setItem('token', newToken)
    navigate('/dashboard')
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
