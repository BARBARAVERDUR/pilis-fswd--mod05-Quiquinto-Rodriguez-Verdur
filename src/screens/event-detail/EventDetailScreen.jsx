import { ScrollView } from 'react-native'
import { Slider } from '../../components'
import { styles } from './LocationDetailScreen.styles'
import { Map, Detail } from './layouts'

export const EventDetailScreen = ({ route }) => {
  const { event } = route.params

  return (
    <ScrollView style={styles.container}>
      <Slider images={event.images} />
      <Detail event={event} />
      <Map place={event.place} />
    </ScrollView>
  )
}
