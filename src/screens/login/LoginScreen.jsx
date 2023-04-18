import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { User } from '../../api/user'
import { useUser } from '../../contexts/userContext'
import { COLORS, SCREENS } from '../../utils'
import { ErrorMessage, Loading, LogInForm } from './layouts'

const ERROR_MESSAGE = 'Credenciales incorrectas'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white
  }
})

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
    <View style={styles.container}>
      <LogInForm handleLogin={handleLogin} />
      <Loading isLoading={isLoading} />
      <ErrorMessage message={error} />
    </View>
  )
}
