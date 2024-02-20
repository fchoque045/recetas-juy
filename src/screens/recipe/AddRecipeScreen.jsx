import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './AddRecipeScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { postRecipe } from '../../api/recipe.service'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../context/UserContext'

export const AddRecipeScreen = () => {
  const navigation = useNavigation()
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      description: '',
      ingredients: '',
      preparation: '',
      time: '',
      urlImage: ''
    }
  })

  const handleAddRecipe = ({ name, description, ingredients, preparation, time, urlImage}) => {
    postRecipe(name, description, ingredients, preparation, time, urlImage)
    .then(status => {
      if (status == 201){
        setCurrentUser({add: currentUser + 1})
        reset();
        navigation.navigate('Inicio')
      }
    })
    .catch(err => console.warn(err))
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Agregar Receta</Text>
        <Text style={styles.subtitle}>Nombre</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize='none'
            />
          )}
          name='name'
          rules={{ required: 'El nombre del plato es requerido' }}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
        
        <Text style={styles.subtitle}>Descripción</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={styles.textarea}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              
            />
          )}
          name='description'
          rules={{ required: 'La descripción es requerida' }}
        />
        {errors.description && <Text style={styles.errorText}>{errors.description.message}</Text>}

        <Text style={styles.subtitle}>Ingredientes</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={styles.textarea}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              
            />
          )}
          name='ingredients'
          rules={{ required: 'Los ingredientes son requeridos' }}
        />
        {errors.ingredients && <Text style={styles.errorText}>{errors.ingredients.message}</Text>}

        <Text style={styles.subtitle}>Preparación</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={styles.textarea}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='preparation'
          rules={{ required: 'Agregue la preparación del plato' }}
        />
        {errors.preparation && <Text style={styles.errorText}>{errors.preparation.message}</Text>}

        <Text style={styles.subtitle}>Tiempo de Elaboración</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize='none'
            />
          )}
          name='time'
          rules={{ required: 'El tiempo de elaboración es requerido' }}
        />
        {errors.time && <Text style={styles.errorText}>{errors.time.message}</Text>}

        <Text style={styles.subtitle}>URL de la Imágen</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize='none'
            />
          )}
          name='urlImage'
          rules={{ required: 'Agregue una imagen del plato' }}
        />
        {errors.urlImage && <Text style={styles.errorText}>{errors.urlImage.message}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleAddRecipe)}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
