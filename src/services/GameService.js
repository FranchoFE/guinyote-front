import axios from 'axios';

const baseURL = 'http://localhost:8080/v1'; // Reemplaza con la URL base de tu API REST

const GameService = {
  async fetchGameList() {
    try {
      const response = await axios.get(`${baseURL}/games`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener la lista de juegos:', error);
      return [];
    }
  },
  async addPlayerToGame(gameId, playerName) {
    try {
      const response = await axios.post(`${baseURL}/players`, {
        name: playerName,
        type: "HUMAN"
      });
      return response.data;
    } catch (error) {
      console.error('Error al añadir el jugador al juego:', error);
      throw error; // O puedes manejar el error de otra manera si lo prefieres
    }
  },
};

export default GameService;
