<template>
    <div class="main-container">
        <div class="left-sidebar">
      <game-list :games="games" :selectGame="selectGame" />
    </div>
    <div class="right-section">
      <game-details :selectedGame="selectedGame" />
    </div>
    </div>
  </template>


  <script>
  import GameService from '../services/GameService';
  import GameList from './GameList.vue';
  import GameDetails from './GameDetails.vue';
  
  export default {
  name: 'MainComponent',
  components: {
    GameList,
    GameDetails,
  },
  data() {
    return {
      games: [],
      selectedGame: null,
    };
  },
  mounted() {
    this.fetchGameList();
  },
  methods: {
    async fetchGameList() {
      this.games = await GameService.fetchGameList();
    },
    selectGame(game) {
      this.selectedGame = game; // Asegúrate de tener el método selectGame correctamente definido
    },
  },
};
  </script>
  
  <style>
  .main-container {
    display: flex;
    height: 100vh; /* Hace que el MainComponent ocupe toda la altura de la pantalla */
  }
  
  .left-sidebar {
    flex: 1; /* Hace que el GameList ocupe el 50% del ancho disponible */
    background-color: #f0f0f0;
    padding: 20px;
    overflow-y: auto; /* Añade scroll si el contenido del GameList es muy largo */
  }
  
  .right-section {
    flex: 6; /* Hace que el GameDetails ocupe el 50% del ancho disponible */
    background-color: #e0e0e0;
    padding: 20px;
    overflow-y: auto; /* Añade scroll si el contenido del GameDetails es muy largo */
  }
  </style>
  