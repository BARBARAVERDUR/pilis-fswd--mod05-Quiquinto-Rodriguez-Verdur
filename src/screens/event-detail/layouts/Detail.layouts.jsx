import { Text, View } from 'react-native'
import { styles } from '../LocationDetailScreen.styles'
import { Fav } from '../../../components'
import { useUser } from '../../../contexts/userContext'
import { useState } from 'react'

export const Detail = ({ event }) => {
  const { place } = event
  const { currentUser } = useUser()
  const [isFav, setFav] = useState(currentUser.favorites.includes(event.id))

  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.price}>{place.name}</Text>
      <Text style={styles.location}>{place.direction}</Text>

      {currentUser !== null
        ? (
          <View style={styles.ratingContainer}>
            <Fav isFav={isFav} handlePress={() => { setFav(isFav => !isFav) }} />
          </View>
          )
        : (
          <View style={styles.ratingContainer}>
            <Fav isFav={false} />
          </View>
          )}
      <Text style={styles.description}>{event.description}</Text>
    </View>
  )
}
