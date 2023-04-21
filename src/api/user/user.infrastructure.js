import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../shared/api'
import { UserModel, UserRepository } from './user.model'

const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/users`
export const getUsers = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT)
    return response.json()
  } catch {
    throw new Error('could not fetch users')
  }
}

export class DevRepository extends UserRepository {
  async auth (username, password) {
    const users = await getUsers()
    const user = users.filter(user => user.username === username)[0]

    if (user === undefined) return null
    if (password !== user.password) return null

    return new UserModel(
      user.id,
      user.username,
      user.avatar,
      user.description,
      user.favorites
    )
  }
}

const KEY_USERS = '@users'
export const getUsersStorage = async () => {
  const usersStorage = await AsyncStorage.getItem(KEY_USERS)
  if (usersStorage == null) {
    await AsyncStorage.setItem(KEY_USERS, '[]')
    return []
  }
  return JSON.parse(usersStorage)
}

export class StorageRepository extends UserRepository {
  async auth (username, password) {
    const users = await getUsersStorage()
    const user = users.filter(user => user.username === username)[0]

    if (user === undefined) return null
    if (password !== user.password) return null

    return new UserModel(
      user.id,
      user.username,
      user.avatar,
      user.description,
      user.favorites
    )
  }
}
