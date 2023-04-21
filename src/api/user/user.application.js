import { DevRepository, StorageRepository } from './user.infrastructure'
import { AuthService } from './user.model'

const repository = new DevRepository()
const authService = new AuthService(repository)

const localRepository = new StorageRepository()
const localAuthServices = new AuthService(localRepository)
export class User {
  static async LogIn (username, password) {
    const localUser = await localAuthServices.auth(username, password)
    if (localUser !== null) return localUser
    return await authService.auth(username, password)
  }
}
