# Events App
Aplicación que muestra los eventos que suceden en la provincia de Jujuy.

## Estructura de datos:
### Eventos
La API devuelve una lista de eventos (**Event**) y cada evento se realiza en un lugar especifico (**Place**)
```ts
Event {
  id: number
  name: string
  images: string[]
  date: string
  time: string
  place: Place
  description: string
}
Place {
  name: string
  city: string
  direction: string
  latitude: number
  longitude: number
}
```
### Usuarios
La api usuario devuelve una lista de datos del tipo usuario (**User**)
```ts
User {
  id: string
  username: string
  password: string
  avatar: string
  description: string
}
```
## API
### Event Endpoint
> https://64332306d0127730d2e1ef09.mockapi.io/api/v1/events

### Users Endpoint
> https://64332306d0127730d2e1ef09.mockapi.io/api/v1/users

## Nota
Los nombres usuarios de testing son los respectivos de la cuenta de github con la **contraseña 1234**


