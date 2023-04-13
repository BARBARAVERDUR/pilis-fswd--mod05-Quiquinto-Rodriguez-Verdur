import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { getUsers } from '../../api/user/user.service'
import { useUser } from '../../contexts/UserContext'
import { styles } from './LoginScreen.styles'
import { SCREENS } from '../../utils'

const getUser = (usersList, username) => usersList.filter(user => user.username === username)[0]

export const LoginScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useUser()
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const handleLogin = ({ username, password }) => {
    getUsers()
      .then(users => {
        const user = getUser(users, username)
        if (username === user.username && password === user.password) {
          setCurrentUser(user)
          navigation.navigate(SCREENS.HOME)
        } else {
          console.log(user)
        }
      })
      .catch(err => console.warn(err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Nombre de usuario'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='username'
        rules={{ required: 'El nombre de usuario es requerido' }}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Contraseña'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name='password'
        rules={{ required: 'La constraseña es requerida' }}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogin)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}
