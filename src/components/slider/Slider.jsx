import { Image, ScrollView, View } from 'react-native'
import { styles } from './Slider.styles'

export const Slider = ({ images = [] }) => {
  return (
    <View style={styles.imageContainer}>
      <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
        {images.map((image, idx) => (
          <Image
            key={idx}
            source={{ uri: image }}
            style={styles.image}
            resizeMode='cover'
          />
        ))}
      </ScrollView>
    </View>
  )
}
