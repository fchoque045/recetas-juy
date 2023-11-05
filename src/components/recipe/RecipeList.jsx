import React from 'react'
import { FlatList, ScrollView , View } from 'react-native'
import { RecipeCard } from './RecipeCard'

export const RecipeList = ({recipes}) => {
    return (
        <View style={{alignItems: 'center', marginBottom: 100, flexGrow:1}}>
            <FlatList
                data={recipes}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({item}) => (<RecipeCard item={item}/>)}
                showsVerticalScrollIndicator
                scrollEnabled={true}
            />
        </View>
    )
}