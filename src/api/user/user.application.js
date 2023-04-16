import { DevRepository } from './user.infrastructure'
import { AuthService } from './user.model'

const repository = new DevRepository()
const authService = new AuthService(repository)
export class User {
  static async LogIn (username, password) {
    return await authService.auth(username, password)
  }
}
