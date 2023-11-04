import { StatusBar } from 'expo-status-bar'
import { COLORS } from './src/utils/theme'
import { WelcomeScreen } from './src/screens/welcome/WelcomeScreen'
import { MainStackScreen } from './src/navigations/MainStackScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const ListStack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <ListStack.Navigator screenOptions={{ headerShown: false }}>
          <ListStack.Screen name='Welcome' component={WelcomeScreen} />
          <ListStack.Screen name='Main' component={MainStackScreen} />
        </ListStack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={COLORS.inactivePri} />
    </>
  );
}