import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { SearchBar } from '../../components/search-bar/SearchBar'
import { getRecipeList } from '../../api/recipe.service'
import { styles } from '../home/HomeScreen.styles'
import { RecipeList } from '../../components/recipe/RecipeList'
import { UserContext } from '../../context/UserContext'

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [recipeList, setRecipeList] = useState([])
  const { currentUser } = useContext(UserContext)

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const filteredRecipes = recipeList.filter(recipe => (
    recipe.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  useEffect(() => {
    getRecipeList()
      .then(data => {
        setRecipeList(data)
      })
      .catch(err => console.log(err))
  }, [currentUser])


  return (
      <SafeAreaView style={styles.container}>
        <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
        <RecipeList recipes={filteredRecipes}/>
      </SafeAreaView>
  )
}