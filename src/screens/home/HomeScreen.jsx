import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { styles } from './HomeScreen.styles'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Viaja y disfruta!
      </Text>
    </SafeAreaView>
  )
}
