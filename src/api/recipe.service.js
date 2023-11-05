import { api } from './recetas-juy-api'
const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/receta`

export const getRecipeList = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT)
    return response.json()
  } catch {
    throw new Error('could not fetch locations')
  }
}

export const postRecipe = async (name, description, ingredients, preparation, time, urlImage) => {
    try {
      const response = await fetch(SERVICE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            nombre: name, 
            descripcion: description, 
            ingredientes: ingredients,
            preparacion: preparation,
            tiempo: time,
            imagen: urlImage
        })
      })
      return response.status
    } catch {
      throw new Error('could not fetch locations')
    }
  }
