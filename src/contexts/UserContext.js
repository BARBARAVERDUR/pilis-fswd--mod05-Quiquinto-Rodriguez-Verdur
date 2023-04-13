import { createContext, useContext, useState } from 'react'

export const UserContext = createContext({
  currentUser: {},
  setCurrentUser: () => {}
})

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
