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
      user.description
    )
  }
}
