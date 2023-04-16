import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './LocationListScreen.styles'
// import { data } from '../../api/data'
import { SearchBar } from '../../components/search-bar/SearchBar'
import { Events } from '../../api/events'
import { SCREENS } from '../../utils'

const Card = ({ onPress, event }) => (
  <Pressable onPress={onPress}>
    <View style={styles.itemContainer}>
      <Image source={{ uri: event.images[0] }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{event.name}</Text>
      <Text style={styles.itemDetail}>{event.place.city}</Text>
    </View>
  </Pressable>
)

export const EventsListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [eventsList, setEventsList] = useState([])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  const filteredLocations = eventsList.filter(event => (
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  useEffect(() => {
    Events.GetEventsList()
      .then(events => {
        setEventsList(events)
      })
      .catch(err => console.log(err))
  }, [])

  const renderEventCard = ({ item }) => {
    const onPress = () => navigation.navigate(SCREENS.DETAIL, { event: item })
    return <Card onPress={onPress} event={item} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredLocations}
        renderItem={renderEventCard}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}
