import { Text, View } from 'react-native'
import { styles } from '../LocationDetailScreen.styles'
import { Fav } from '../../../components'
import { useUser } from '../../../contexts/UserContext' 

export const Detail = ({ event }) => {
  const { place } = event
  const { currentUser } = useUser()
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.price}>{place.name}</Text>
      <Text style={styles.location}>{place.direction}</Text>
      {currentUser!==null && (
        <View style={styles.ratingContainer}>
          <Fav/>
        </View>
      )}
      <Text style={styles.description}>{event.description}</Text>
    </View>
  )
}