<template>
  <div class="game-details">
    <h2 v-if="selectedGame">{{ selectedGame.name }}</h2>
    <ul v-if="selectedGame">
      <li v-for="player in selectedGame.players" :key="player">{{ player }}</li>
    </ul>

    <button @click="showModal">Entrar en el ejercicio</button>
    <!-- Ventana emergente -->
    <div v-if="isModalVisible" class="modal-container">
      <div class="modal-content">
        <h3>Introduce tu nombre de usuario</h3>
        <input v-model="username" type="text" placeholder="Nombre de usuario">
        <div class="modal-buttons">
          <button @click="acceptInput">Aceptar</button>
          <button @click="cancelInput">Cancelar</button>
        </div>
      </div>
    </div>

    <div v-if="connectedToGame">
      <h2>Conectado al juego</h2>

      <!-- Agregar el componente GameBoard -->
      <GameBoard :imageUrl_0="rutaAlPng" :imageUrl_1="rutaAlPng_2" :imageUrl_2="rutaAlPng_2" :imageUrl_3="rutaAlPng_2"
        :imageUrl_4="rutaAlPng_2" :imageUrl_5="rutaAlPng_2" :imageUrl_reverse="rutaAlPng_reverse" :player_turn=1 />
    </div>

  </div>
</template>
  
<script>
import GameService from '../services/GameService';
import GameBoard from './GameBoard.vue';
import WebSocketService from '@/services/WebSocketService';

export default {
  name: 'GameDetails',
  components: {
    GameBoard, // Agrega el componente GameBoard a la lista de componentes
  },
  props: {
    selectedGame: Object,
  },
  data() {
    return {
      rutaAlPng: require('@/assets/1_oros.png'), // Cambia esto a la ruta real del PNG
      rutaAlPng_2: require('@/assets/1_espadas.png'), // Cambia esto a la ruta real del PNG
      rutaAlPng_reverse: require('@/assets/reverse_card.png'), // Cambia esto a la ruta real del PNG
      isModalVisible: false, // Renombramos showModal a isModalVisible
      connectedToGame: false,
      username: '',
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true; // Renombramos showModal a isModalVisible
    },
    async acceptInput() {
      if (this.username.trim() !== '') {
        try {
          console.log("Vamos a añadir el jugador al juego", this.username)
          // Llama a GameService.addPlayerToGame para realizar el POST
          const response = await GameService.addPlayerToGame(
            this.selectedGame.gameId,
            this.username
          );
          console.log('Jugador añadido al juego:', response);

          this.connectToWebsoket()

          // Aquí puedes manejar la respuesta del servidor, si es necesario
        } catch (error) {
          console.error('Error al añadir el jugador al juego:', error);
          // Aquí puedes manejar el error de alguna manera, si es necesario
        }
        this.isModalVisible = false;
      } else {
        alert('Por favor, introduce un nombre de usuario válido.');
      }
    },
    connectToWebsoket() {
      // Usar el servicio WebSocket para recibir mensajes
      // WebSocketService.stompClient.onConnect = this.onWebSocketConnect;
      WebSocketService.connect();
      console.log("Tenemos el websocketservice", WebSocketService)
      this.connectedToGame = true;
    },
    cancelInput() {
      // Cierra la ventana emergente sin hacer nada más
      this.isModalVisible = false; // Renombramos showModal a isModalVisible
    },
    /*
    onWebSocketConnect() {
      console.log('WebSocket connected desde GameDetails.vue');
      this.connectedToGame = true;
    },
    */
  },
};
</script>
  
<style>
/* Estilos para GameDetails */
</style>
  