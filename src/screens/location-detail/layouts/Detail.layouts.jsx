import { Text, View } from 'react-native'
import { styles } from '../LocationDetailScreen.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../../utils'

export const Detail = ({ event }) => {
  const { place } = event
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.price}>{place.name}</Text>
      <Text style={styles.location}>{place.direction}</Text>

      <View style={styles.ratingContainer}>
        <Ionicons name='star' size={20} color={COLORS.primary} />
      </View>

      <Text style={styles.description}>{event.description}</Text>
    </View>
  )
}
