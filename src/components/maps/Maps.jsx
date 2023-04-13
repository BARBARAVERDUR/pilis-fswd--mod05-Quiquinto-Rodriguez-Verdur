import MapView, { Marker } from 'react-native-maps'
import { styles } from './Maps.styles'

export const Maps = ({ latitude, longitude, name, delta = 0.002 }) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: delta,
        longitudeDelta: delta
      }}
    >
      <Marker
        coordinate={{
          latitude,
          longitude
        }}
        title={name}
      />
    </MapView>
  )
}
