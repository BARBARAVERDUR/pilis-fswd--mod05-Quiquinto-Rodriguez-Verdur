import { getUsers } from './user.service'

export class User {
  constructor (
    id,
    username,
    avatar,
    description
  ) {
    this.id = id
    this.username = username
    this.avatar = avatar
    this.description = description
  }

  static async LogIn (username, password) {
    const users = await getUsers()
    const user = users.filter(user => user.username === username)[0]

    if (user === undefined) return null
    if (password !== user.password) return null

    return new User(
      user.id,
      user.username,
      user.avatar,
      user.description
    )
  }
}
