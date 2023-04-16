import { DevRepository } from './events.infrastructure'
import { EventServices } from './events.models'

const repository = new DevRepository()
const services = new EventServices(repository)

export class Events {
  static async GetEventsList () {
    return await services.getAllEvents()
  }

  static async GetEvent (id) {
    return await services.getEvent(id)
  }

  static async GetEvents (listIds) {
    return services.getEvents(listIds)
  }
}
