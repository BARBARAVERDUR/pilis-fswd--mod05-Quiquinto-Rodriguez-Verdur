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
    return await Service.auth(username, password)
  }
}
