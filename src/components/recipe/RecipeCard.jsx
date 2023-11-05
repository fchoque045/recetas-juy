import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './RecipeCard.styles'

export const RecipeCard = ({recipe}) => {
  return (
    <TouchableOpacity
        activeOpacity={0.7}
    >
        <View style={styles.cardContainer}>
            <View style={{alignItems: 'center'}}>
                <Image 
                    source={{ uri: recipe.imagen }} 
                    style={styles.image} 
                />
            </View>
            <Text style={styles.name}>{recipe.nombre}</Text>
        </View>
    </TouchableOpacity>
  )
}
