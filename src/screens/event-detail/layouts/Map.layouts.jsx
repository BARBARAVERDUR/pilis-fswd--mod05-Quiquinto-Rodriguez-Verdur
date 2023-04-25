import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Maps } from '../../../components'
import { useUser } from '../../../contexts/UserContext'
import { styles } from '../LocationDetailScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../../utils'
import '../../../utils/i18n'
import { useTranslation } from 'react-i18next'

const DefaultMap = () => {
  const DEFAULT_MAP =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Argentina_Jujuy_location_map.svg/605px-Argentina_Jujuy_location_map.svg.png'

  const navigation = useNavigation()

  const handleImagePress = () => {
    navigation.navigate(SCREENS.PROFILE)
  }

  const { t, i18n } = useTranslation()

  return (
    <TouchableWithoutFeedback onPress={handleImagePress}>
      <View>
        <Text>{t('Inicia sesión para ver la dirección en el mapa')}</Text>
        <Image source={{ uri: DEFAULT_MAP }} style={styles.imageMap} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export const Map = ({ place }) => {
  const { currentUser } = useUser()
  return currentUser !== null
    ? (
      <Maps
        name={place.name}
        latitude={place.latitude}
        longitude={place.longitude}
      />
      )
    : (
      <DefaultMap />
      )
}
