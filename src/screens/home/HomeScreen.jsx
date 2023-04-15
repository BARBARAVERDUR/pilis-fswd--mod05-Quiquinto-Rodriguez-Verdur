import React from 'react'
import { ImageBackground, SafeAreaView, Text } from 'react-native'
import { styles } from './HomeScreen.styles'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../../assets/main.jpg")}
      >
        <Text style={styles.title}>
          Consulta el Calendario de Jujuy y enterate de todos los eventos!
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}
