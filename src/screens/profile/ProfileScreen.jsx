import React from 'react'
import { useUser } from '../../contexts/UserContext'
import { LoginScreen } from '../login/LoginScreen'
import { UserInfoScreen } from '../user/UserInfoScreen'

export const ProfileScreen = () => {
  const { currentUser } = useUser()

  return (
    <>
      {currentUser
        ? (
          <UserInfoScreen />
          )
        : (
          <LoginScreen />
          )}
    </>

  )
}
