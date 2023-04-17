import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../../../utils'

export function Error ({ message }) {
  return message !== null && (
    <View style={style.container}>
      <Text> {message} </Text>
      <TouchableOpacity style={style.button} onPress={() => {}}>
        <Text>x</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '10%',
    backgroundColor: COLORS.primary,
    color: COLORS.white
  },
  button: {
    backgroundColor: COLORS.primary
  }
})
