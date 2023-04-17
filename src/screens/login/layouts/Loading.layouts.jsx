import React from 'react'
import { Text } from 'react-native'

export function Loading ({ isLoading }) {
  return isLoading && <Text> cargando... </Text>
}
