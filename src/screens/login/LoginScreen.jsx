import { useNavigation } from '@react-navigation/native'
import { User } from '../../api/user'
import { useUser } from '../../contexts/userContext'
import { SCREENS } from '../../utils'
import { Loading, LogInForm } from './layouts'
import { useState } from 'react'

export const LoginScreen = () => {
  const { setCurrentUser } = useUser()
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()

  const handleLogin = ({ username, password }) => {
    setIsLoading(true)
    User.LogIn(username, password)
      .then(user => {
        setIsLoading(false)
        if (user === null) return

        setCurrentUser(user)
        navigation.navigate(SCREENS.HOME)
      })
  }

  return (
    <>
      <LogInForm handleLogin={handleLogin} />
      <Loading isLoading={isLoading} />
    </>
  )
}
