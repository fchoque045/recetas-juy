import React from 'react'
import { Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, View } from 'react-native'
import { styles } from './WelcomeScreen.styles'
import { useNavigation } from '@react-navigation/native'

export const WelcomeScreen = () => {
  const navigation = useNavigation()
  const handleSignIn = () => {
    navigation.navigate('Login')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogo}>
        <ImageBackground style={styles.logo} source={require('../../../assets/logo.png')} />
      </View>
      <TouchableOpacity style={styles.buttonIn} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}