import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

import { SCREENS } from './src/utils'
import { UserProvider } from './src/contexts/userContext'
import { EventDetailScreen, MainStackScreen } from './src/screens'

const LocationListStack = createNativeStackNavigator()

export default function App () {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
            {/* //Pantallas con Tab */}
            <LocationListStack.Screen name={SCREENS.MAIN} component={MainStackScreen} />

            {/* //Pantallas sin Tab */}
            <LocationListStack.Screen name={SCREENS.DETAIL} component={EventDetailScreen} />
          </LocationListStack.Navigator>
        </NavigationContainer>
      </UserProvider>

      <StatusBar style='auto' />
    </>
  )
}
