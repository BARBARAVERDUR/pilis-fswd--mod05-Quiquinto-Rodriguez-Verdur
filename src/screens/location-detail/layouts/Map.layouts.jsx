import { Image, Text } from 'react-native'
import { Maps } from '../../../components'
import { useUser } from '../../../contexts/UserContext'
import { styles } from '../LocationDetailScreen.styles'

const DefaultMap = () => {
  const DEFAULT_MAP = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Argentina_Jujuy_location_map.svg/605px-Argentina_Jujuy_location_map.svg.png'
  return (
    <>
      <Text>Inicia sesión para ver la dirección en el mapa</Text>
      <Image source={{ uri: DEFAULT_MAP }} style={styles.imageMap} />
    </>
  )
}

export const Map = ({ place }) => {
  const { currentUser } = useUser()
  return currentUser !== null
    ? <Maps name={place.name} latitude={place.latitude} longitude={place.longitude} />
    : <DefaultMap />
}
