import { DevRepository, StorageRepository } from './user.infrastructure'
import { UserService } from './user.model'

const repository = new DevRepository()
const Service = new UserService(repository)

const localRepository = new StorageRepository()
const localServices = new UserService(localRepository)
export class User {
  static async LogIn (username, password) {
    const localUser = await localServices.auth(username, password)
    if (localUser !== null) return localUser

    const user = await Service.auth(username, password)
    if (user === null) return null
    const newUser = await localServices.register(
      user.username,
      password,
      user.avatar,
      user.description,
      user.favorites
    )

    User.data = newUser
    return newUser
  }
}
