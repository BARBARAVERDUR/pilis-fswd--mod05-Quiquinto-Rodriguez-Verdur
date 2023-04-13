import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useUser } from '../../contexts/UserContext'
import { styles } from './UserInfoScreen.styles'

export const UserInfoScreen = () => {
  const { currentUser, setCurrentUser } = useUser()

  const handleLogout = () => {
    setCurrentUser(null)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: currentUser.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{currentUser.username}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionText}>{currentUser.description}</Text>
      </View>

    </ScrollView>
  )
}
