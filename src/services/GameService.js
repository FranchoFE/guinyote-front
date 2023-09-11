// import axios from 'axios';
const axios = require('axios')

const baseURL = 'http://localhost:8080/v1' // Reemplaza con la URL base de tu API REST

const GameService = {
  async fetchGameList () {
    try {
      const response = await axios.get(`${baseURL}/games`)
      return response.data
    } catch (error) {
      console.error('Error al obtener la lista de juegos:', error)
      return []
    }
  },
  async createNewGame (totalGamesCreated) {
    try {
      const requestData = {
        name: 'nuevoJuego' + (totalGamesCreated + 1)
      }

      const response = await axios.post(`${baseURL}/games`, requestData)
      return response.data
    } catch (error) {
      console.error('Error al crear un nuevo juego:', error)
      return []
    }
  },
  async addPlayerToGame (gameId, playerId) {
    try {
      const response2 = await axios.patch(`${baseURL}/games`, {
        gameId,
        playerId
      })

      return response2.data
    } catch (error) {
      console.error('Error al añadir el jugador al juego:', error)
      throw error // O puedes manejar el error de otra manera si lo prefieres
    }
  }
}

// export default GameService;
module.exports = GameService
