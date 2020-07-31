import React, { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    async function loadStorageData() {
      const storedEmail = localStorage.getItem('@leopardus:email')
      const storagedToken = localStorage.getItem('@leopardus:token')

      if (storedEmail && storagedToken) {
        setUser({ email: storedEmail })
        // api.defaults.headers.Authorization = `Baerer ${storagedToken}`
      }
    }

    loadStorageData()
  })

  function signIn({ email, token }) {
    // const response = await auth.signIn()
    // setUser(response.user)

    // api.defaults.headers.Authorization = `Baerer ${response.token}`

    localStorage.setItem('@leopardus:email', email)
    localStorage.setItem('@leopardus:token', token)
  }

  function signOut() {
    localStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: true || Boolean(user), user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const { isAuthenticated } = useContext(AuthContext)
  return { isAuthenticated }
}

export { AuthProvider, useAuth }
