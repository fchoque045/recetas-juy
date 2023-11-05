import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './RecipeCard.styles'

export const RecipeCard = ({item}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('RecipeDetailScreen', {item})}
    >
        <View style={styles.cardContainer}>
            <View style={{alignItems: 'center'}}>
                <Image 
                    source={{ uri: item.imagen }} 
                    style={styles.image} 
                />
            </View>
            <Text style={styles.name}>{item.nombre}</Text>
        </View>
    </TouchableOpacity>
  )
}
