<template>
<div class="sidebar">
    <ul>
    <li v-for="game in games" :key="game.gameId" @click="handleSelectGame(game)">
        {{ game.name }} - {{ game.status }}
    </li>
    </ul>
</div>
</template>

<script>
export default {
name: 'GameList',
props: {
    games: Array,
    selectGame: Function, // Asegúrate de tener selectGame definido como una prop
},
methods: {
    handleSelectGame(game) {
    this.selectGame(game); // Llama al método selectGame para emitir el evento
    },
},
};
</script>


<style>
/* Estilos para el listado de juegos (si es necesario) */
.sidebar {
background-color: #f0f0f0;
padding: 20px;
}
</style>
  