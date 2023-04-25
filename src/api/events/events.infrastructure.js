import { api } from '../shared/api'
import { Event, Repository } from './events.models'

const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/events`
export const getEventsList = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT)
    return response.json()
  } catch {
    return null
  }
}

export class DevRepository extends Repository {
  constructor () {
    super()
    this.events = []
  }

  async getAll () {
    if (this.events.length !== 0) return this.events

    const events = await getEventsList()
    if (events === null) return this.events

    this.events = events.map(e => Event.New(e))
    return this.events
  }

  async getById (id) {
    const event = this.events.filter(e => e.id === id)[0]
    return event != null ? Event.New(event) : null
  }

  async getByIds (listIds) {
    return this.events.filter(e => listIds.includes(e.id))
  }
}
