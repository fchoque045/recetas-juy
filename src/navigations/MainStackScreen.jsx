import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/home/HomeScreen'
import { AddRecipeScreen } from '../screens/recipe/AddRecipeScreen'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SPACING } from '../utils/theme'
import { StyleSheet } from 'react-native'
import { RecipeDetailScreen } from '../screens/recipe/RecipeDetailScreen'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Inicio: 'home',
  Agregar: 'add-circle',
}

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.text,
    headerShown: false,
    tabBarStyle: styles.tabBar
  }
}

export const MainStackScreen = () => {
  return (
    <>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Inicio' component={HomeScreen} />
        <Tab.Screen name='Agregar' component={AddRecipeScreen} />
      </Tab.Navigator>
    </>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    backgroundColor: COLORS.background,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
})