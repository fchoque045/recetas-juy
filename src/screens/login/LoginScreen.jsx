import React, { useContext, useState } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, ImageBackground, TextInput, ScrollView } from 'react-native'
import { styles } from '../login/LoginScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme'
import { UserContext } from '../../context/UserContext'
import { useForm, Controller } from 'react-hook-form'
import { getUsers } from '../../api/user.service'

export const LoginScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  const [visible, setVisible] = useState(false)
  
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const handleLogin = ({ email, password }) => {
    getUsers()
      .then(users => {
        const user = users[0]
        if (email === user.email && password === user.password) {
            setCurrentUser({ email, password })
            navigation.navigate('Main')
        }
      })
      .catch(err => console.warn(err))
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../assets/bg.png')}>
        <ScrollView style={styles.scroll}>
          <View style={styles.card}>
            <Text style={styles.title}>Inicia Sesión</Text>
            <Text style={styles.subTitle}>Correo Electrónico</Text>
            <View style={styles.inputContainer}>
              <Ionicons name='at-sharp' size={20} color={COLORS.primary} />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder='Ingrese su Email'
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    autoCapitalize='none'
                  />
                )}
                name='email'
                rules={{ required: 'El email es requerido' }}
              />
            </View>
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            <Text style={styles.subTitle}>Contraseña</Text>
            <View style={styles.inputContainer}>
              <Ionicons name='lock-closed-outline' size={20} color={COLORS.primary} />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder='Ingrese su Contraseña'
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry
                  />
                )}
                name='password'
                rules={{ required: 'El password es requerido' }}
              />
            </View>
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogin)} disabled={visible}>
                <Text style={styles.buttonText}>Acceder</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}
