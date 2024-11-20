<script setup>
import {generateSinusoidalPath, visualizePath} from "../utils/fonctions.js";

const props = defineProps({
  niveau_actuel: Number,
  niveau_max: Number,
});

const configKonva = {
  width: window.innerWidth,
  height: window.innerHeight,
  background: "#00B161",
};
const levelCircle = {
  x: 100,
  y: 100,
  radius: 30,
  fill: "#D2CABD",
  stroke: "#938C81",
  strokeWidth: 4
};
const levelDot = {
  radius: 5,
  fill: "#fff",
  stroke: "#fff",
  strokeWidth: 4
}


// Exemple d'utilisation
const startPosition = {x: parseInt(configKonva.width/2), y: configKonva.height - 20}; // Point de départ
const points = generateSinusoidalPath(
    startPosition,
    60,      // nombre de points
    20,     // espacement vertical
    350     // amplitude (largeur du zigzag)
);


</script>

<template>
  <div class="quiz-container h-screen w-screen bg-[#00B161]">
    <v-stage :config="configKonva">
      <v-layer>
        <v-circle :config="levelCircle"></v-circle>
        <v-circle v-for="pos in points" :config="{x:pos.x, y: pos.y ,...levelDot}"></v-circle>
      </v-layer>
    </v-stage>
  </div>
</template>

<style scoped>


</style>
