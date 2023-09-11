// import axios from 'axios';
const axios = require('axios')

const baseURL = 'http://localhost:8080/v1' // Reemplaza con la URL base de tu API REST

const PlayerService = {
  async createNewPlayer (name) {
    try {
      const requestData = {
        name,
        type: 'HUMAN'
      }

      const response = await axios.post(`${baseURL}/players`, requestData)
      return response.data
    } catch (error) {
      console.error('Error al crear un nuevo jugador:', error)
      return []
    }
  },

  async findPlayerByName (name) {
    try {
      const response = await axios.get(`${baseURL}/players?name=` + name)
      return response.data
    } catch (error) {
      console.error('Error al buscar al jugador', name)
      return null
    }
  }
}

// export default PlayerService;
module.exports = PlayerService
