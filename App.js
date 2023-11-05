import { StatusBar } from 'expo-status-bar'
import { COLORS } from './src/utils/theme'
import { WelcomeScreen } from './src/screens/welcome/WelcomeScreen'
import { MainStackScreen } from './src/navigations/MainStackScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RecipeDetailScreen } from './src/screens/recipe/RecipeDetailScreen'
import { LoginScreen } from './src/screens/login/LoginScreen'
import { UserProvider } from './src/context/UserContext'

const ListStack = createNativeStackNavigator()

export default function App() {
  return (
    <>
    <UserProvider>
      <NavigationContainer>
        <ListStack.Navigator screenOptions={{ headerShown: false }}>
          <ListStack.Screen name='Welcome' component={WelcomeScreen} />
          <ListStack.Screen name='Main' component={MainStackScreen} />
          <ListStack.Screen name='Login' component={LoginScreen} />
          <ListStack.Screen name='RecipeDetailScreen' component={RecipeDetailScreen} />
        </ListStack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={COLORS.inactivePri} />
    </UserProvider>
    </>
  );
}