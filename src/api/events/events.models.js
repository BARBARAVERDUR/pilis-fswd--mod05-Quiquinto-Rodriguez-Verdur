export class Event {
  constructor (id, name, images, date, time, place, description) {
    this.id = id
    this.name = name
    this.images = images
    this.date = date
    this.time = time
    this.place = place
    this.description = description
  }

  static New (event) {
    return new Event(
      event.id,
      event.name,
      event.image,
      event.date,
      event.time,
      event.place,
      event.description
    )
  }
}

export class Repository {
  async getAll () {}
  async getById (id) {}
  async getByIds (listIds) {}
}

export class EventServices {
  constructor (repository = new Repository()) {
    this.repository = repository
  }

  async getAllEvents () {
    return await this.repository.getAll()
  }

  async getEvent (id) {
    return await this.repository.getById(id)
  }

  async getEvents (listIds) {
    return await this.repository.getByIds(listIds)
  }
}
