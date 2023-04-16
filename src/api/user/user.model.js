export class UserModel {
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
}

export class UserRepository {
  async auth (username, password) {
    return new UserModel()
  }
}

export class AuthService {
  constructor (repository = new UserRepository()) {
    this.repository = repository
  }

  async auth (username, password) {
    return this.repository.auth(username, password)
  }
}
