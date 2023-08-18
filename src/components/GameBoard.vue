<template>
  <div class="game-board">
    <h2 class="board-title">Título del Tablero del Juego</h2>

    <svg width="1920" height="1080" viewBox="0 0 508 285" version="1.1" id="svg1" xml:space="preserve"
      xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg">
      <defs id="defs1" />
      <g id="layer1">
        <rect style="fill:none;stroke:#000000;stroke-width:7.61867;stroke-dasharray:none;stroke-opacity:1" id="rect1"
          width="493.05701" height="271.35815" x="6.8962121" y="8.425168" />
        <path :style="recStyle(0)" id="path1"
          d="m 349.40887,-271.05072 a 104.96654,86.089859 0 0 1 -104.94785,86.08986 104.96654,86.089859 0 0 1 -104.98521,-86.05921 l 104.96653,-0.0307 z"
          transform="scale(1,-1)" />
        <path :style="recStyle(1)" id="path1-0"
          d="M 354.39268,16.252413 A 108.51832,88.98867 0 0 1 245.89368,105.24108 108.51832,88.98867 0 0 1 137.35605,16.284098 l 108.51831,-0.03168 z" />
        <path :style="recStyle(2)" id="path1-0-7"
          d="m -61.223007,14.145435 a 79.212921,91.932449 0 0 1 -79.198823,91.932445 79.212921,91.932449 0 0 1 -79.22701,-91.899712 l 79.21291,-0.03273 z"
          transform="matrix(-0.00805932,-0.99996752,0.99998813,-0.00487298,0,0)" />
        <path :style="recStyle(3)"
          id="path1-0-7-2"
          d="m -55.704308,-492.93692 a 87.077415,97.286377 0 0 1 -87.061912,97.28638 87.077415,97.286377 0 0 1 -87.09291,-97.25174 l 87.07741,-0.0346 z"
          transform="matrix(0.0077584,-0.9999699,-0.99998719,-0.005062,0,0)" />

        <rect width="28" height="40" x="158" y="230" :fill="selectedCardFill(0)" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_0" x="160" y="232"
          v-on:click="handleImageClick($event, 0)" />
        <rect width="28" height="40" x="188" y="230" :fill="selectedCardFill(1)" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_1" x="190" y="232"
          v-on:click="handleImageClick($event, 1)" />
          <rect width="28" height="40" x="218" y="230" :fill="selectedCardFill(2)"/>
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_2" x="220" y="232"
          v-on:click="handleImageClick($event, 2)" />
          <rect width="28" height="40" x="248" y="230" :fill="selectedCardFill(3)"/>
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_3" x="250" y="232"
          v-on:click="handleImageClick($event, 3)" />
          <rect width="28" height="40" x="278" y="230" :fill="selectedCardFill(4)"/>
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_4" x="280" y="232"
          v-on:click="handleImageClick($event, 4)" />
          <rect width="28" height="40" x="308" y="230" :fill="selectedCardFill(5)"/>
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_5" x="310" y="232"
          v-on:click="handleImageClick($event, 5)" />

        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="160" y="20" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="190" y="20" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="220" y="20" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="250" y="20" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="280" y="20" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="310" y="20" />

        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="60" y="-55"
          transform="rotate(90)" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="90" y="-55"
          transform="rotate(90)" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="120" y="-55"
          transform="rotate(90)" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="150" y="-55"
          transform="rotate(90)" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="180" y="-55"
          transform="rotate(90)" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="210" y="-55"
          transform="rotate(90)" />

        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="60" y="-488"
          transform="rotate(90)" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="90" y="-488"
          transform="rotate(90)" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="120" y="-488"
          transform="rotate(90)" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="150" y="-488"
          transform="rotate(90)" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="180" y="-488"
          transform="rotate(90)" />
        <image width="24" height="36" preserveAspectRatio="none" :href="imageUrl_reverse" x="210" y="-488"
          transform="rotate(90)" />

        <g v-on:click="playEvent" style="cursor: pointer;">
          <rect style="fill:none;stroke:#007227;stroke-width:2;stroke-dasharray:none;stroke-opacity:1" width="44"
            height="13" x="450" y="260" ry="6" />
          <text x="460" y="270" font-family="Arial, sans-serif" font-size="10" fill="#007227"
            text-anchor="start">Jugar</text>
        </g>
      </g>
    </svg>

  </div>
</template>

<script>
export default {
  name: 'GameBoard',
  data () {
    return {
      selected_card: -1
    };
  },
  props: {
    imageUrl_0: String,
    imageUrl_1: String,
    imageUrl_2: String,
    imageUrl_3: String,
    imageUrl_4: String,
    imageUrl_5: String,
    imageUrl_reverse: String,
    player_turn: Number,
  },
  methods: {
    handleImageClick(event, id) {
      // Lógica para manejar el clic en la imagen
      const x = event.clientX; // Coordenada x del clic
      const y = event.clientY; // Coordenada y del clic
      console.log(`Clic ${id} en la imagen en coordenadas (${x}, ${y})`);

      if (this.selected_card == id)
      {
        this.selected_card = -1
      }
      else {
        this.selected_card = id
      }
      
      // Otras acciones a realizar cuando se hace clic en la imagen
    },
    playEvent() {
      console.log("Jugada hecha", this.selected_card);

      // Otras acciones a realizar cuando se hace clic en la imagen
    },
    getPlayerBoardColor(index) {
      console.log("getPlayerBoardColor", index, "-", this.player_turn);
      if (this.player_turn == index)
      {
        return "red";
      }
      return "green";
    },
  },
  computed: {
    recStyle() {
      return (rectIndex) => {
        const color = this.getPlayerBoardColor(rectIndex);
        return `fill:none;stroke:${color};stroke-width:4.71033;stroke-dasharray:none;stroke-opacity:1`
      };
    },
    selectedCardFill() {
      return (cardIndex) => {
        if (cardIndex == this.selected_card)
        {
          console.log("selectedCardFill red", cardIndex, this.selected_card)
          return "red"
        }
          console.log("selectedCardFill transparent", cardIndex, this.selected_card)
        return "transparent"
      };
    },
  },
  // Otras opciones y lógica específica del componente GameBoard
};
</script>

<style scoped>
.game-board {
  /* Estilos para ajustar el tamaño del componente */
  width: 100%;
  /* Ocupa el 100% del ancho disponible */
  height: 100vh;
  /* Ocupa la altura completa del viewport */
  display: flex;
  flex-direction: column;
  /* Alinea elementos verticalmente */
  justify-content: center;
  align-items: center;
}

.board-title {
  margin-top: 60px;
  /* Agrega margen inferior al título */
}

.svg-content {
  /* Estilos para ajustar el tamaño del SVG */
  width: 100%;
  /* Ocupa el 100% del ancho del contenedor */
  height: 100%;
  /* Ocupa la altura completa del contenedor */
}</style>
