import { AntDesign } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../utils'

export function ErrorMessage ({ message }) {
  const [isError, setIsError] = useState()

  useEffect(function () {
    if (message === null) setIsError(false)
    else setIsError(true)
  }, [message])

  const onPress = () => {
    setIsError(false)
  }

  return isError && (
    <View style={style.container}>
      <Text style={style.message}>{message}</Text>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name='closecircleo' size={30} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    margin: 20,
    padding: 10,
    backgroundColor: COLORS.primary
  },

  message: {
    color: COLORS.white
  }
})
