import { useNavigation } from '@react-navigation/native'
import { User } from '../../api/user'
import { useUser } from '../../contexts/userContext'
import { SCREENS } from '../../utils'
import { ErrorMessage, Loading, LogInForm } from './layouts'
import { useState } from 'react'

const ERROR_MESSAGE = 'Credenciales incorrectas'

export const LoginScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useUser()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = ({ username, password }) => {
    setIsLoading(true)

    setError(null)
    User.LogIn(username, password)
      .then(user => {
        setIsLoading(false)

        if (user === null) {
          setIsLoading(false)
          setError(ERROR_MESSAGE)
          return
        }

        setCurrentUser(user)
        navigation.navigate(SCREENS.HOME)
      })
  }

  return (
    <>
      <LogInForm handleLogin={handleLogin} />
      <Loading isLoading={isLoading} />
      <ErrorMessage message={error} />
    </>
  )
}
