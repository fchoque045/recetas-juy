import React from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './WelcomeScreen.styles'
import { useNavigation } from '@react-navigation/native'

export const WelcomeScreen = () => {
  const navigation = useNavigation()
  const handleSignIn = () => {
    navigation.navigate('Main')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Screen</Text>
      <TouchableOpacity style={styles.buttonIn} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}