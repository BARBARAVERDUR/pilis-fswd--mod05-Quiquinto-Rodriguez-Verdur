import { DevRepository } from './user.Infrastructure'
import { AuthService } from './user.model'

const repository = new DevRepository()
const authService = new AuthService(repository)
export class User {
  static async LogIn (username, password) {
    return await authService.auth(username, password)
  }
}
