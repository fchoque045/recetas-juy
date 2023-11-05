import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { styles } from '../recipe/RecipeDetailScreen.styles'
import { COLORS } from '../../utils/theme';

export const RecipeDetailScreen = ({ navigation, route }) => {
    const { item } = route.params

  return (
    <ScrollView>
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.backButton}
            onPress={() => navigation.pop()}   
        >
            <Entypo name="arrow-with-circle-left" size={35} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>
            {item.nombre}
        </Text>
        <View style={{alignItems: 'center'}}>
            <Image 
                source={{ uri: item.imagen }} 
                style={styles.image} 
            />
        </View>
        <View style={styles.detailBox}>
            <Text style={styles.subtitle}>
                Descripción
            </Text>
            <Text style={styles.description}>
                {item.descripcion}
            </Text>
        </View>

        <View style={styles.detailBox}>
            <Text style={styles.subtitle}>
                Ingredientes
            </Text>
            <Text style={styles.description}>
                {item.ingredientes}
            </Text>
        </View>

        <View style={styles.detailBox}>
            <Text style={styles.subtitle}>
                Preparación
            </Text>
            <View style={styles.time}>
                <Feather name="clock" size={24} color={COLORS.grey} />
                <Text style={styles.description}>
                    {item.tiempo}
                </Text>
            </View>
            <Text style={styles.description}>
                {item.preparacion}
            </Text>
        </View>
    </ScrollView>
  )
}
