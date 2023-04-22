export class UserModel {
  constructor (
    id,
    username,
    avatar,
    description,
    favorites
  ) {
    this.id = id
    this.username = username
    this.avatar = avatar
    this.description = description
    this.favorites = favorites
  }
}

export class UserRepository {
  async auth (username, password) {
    return new UserModel()
  }

  async create (user) { return new UserModel() }
  async update (user) { return new UserModel() }
}

export class UserService {
  constructor (repository = new UserRepository()) {
    this.repository = repository
  }

  async auth (username, password) {
    return this.repository.auth(username, password)
  }

  async register (
    username,
    password,
    avatar,
    description,
    favorites
  ) {
    const user = {
      username,
      password,
      avatar,
      description,
      favorites
    }

    return await this.repository.create(user)
  }

  async update (user) {
    return await this.repository.update(user)
  }
}
