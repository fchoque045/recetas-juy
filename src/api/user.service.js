import { api } from './recetas-juy-api'
const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/usuario`

export const getUsers = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT)
    return response.json()
  } catch {
    throw new Error('could not fetch users')
  }
}
