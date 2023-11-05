import React, { useContext } from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './LogoutScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../context/UserContext'

export const LogoutScreen = () => {
  const navigation = useNavigation()
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const handleLogout = () => {
    setCurrentUser(null)
    // removeData()
    navigation.navigate('Welcome')
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonIn} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}