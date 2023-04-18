import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View, StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../../utils/theme'

export const LogInForm = ({ handleLogin }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })

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

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: StatusBar.currentHeight
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 5
  },
  errorText: {
    color: 'red',
    marginBottom: 8
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
