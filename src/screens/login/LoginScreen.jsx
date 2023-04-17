import { useNavigation } from '@react-navigation/native'
import { User } from '../../api/user'
import { useUser } from '../../contexts/userContext'
import { SCREENS } from '../../utils'
import { LogInForm } from './layouts/LogInForm.layouts'

export const LoginScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useUser()

  const handleLogin = ({ username, password }) => {
    User.LogIn(username, password)
      .then(user => {
        if (user === null) return

        setCurrentUser(user)
        navigation.navigate(SCREENS.HOME)
      })
  }

  return <LogInForm handleLogin={handleLogin} />
}
