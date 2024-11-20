<script setup>
import {computeNumberOfPoint, generateSinusoidalPath, generateSmoothPath, visualizePath} from "../utils/fonctions.js";
import NiveauButtons from "./NiveauButtons.vue";
import {NUMBER_OF_POINT_BETWEEN_LEVEL} from "../utils/contant.js";
import {computed} from "vue";

const emit = defineEmits(['click-level']);
const props = defineProps({
  niveau_actuel: Number,
  niveau_max: Number,
});

const configKonva = {
  width: window.innerWidth,
  height: window.innerHeight,
  background: "#00B161",
  draggable: true, // Permettre de glisser toute la scène
  dragBoundFunc: (pos) => {
    // Restreindre le mouvement si nécessaire (facultatif)
    return {
      x: 0, // Bloque le glissement à droite
      y: pos.y, // Bloque le glissement en bas
    };
  },
};

// Configuration des points
const levelDot = {
  radius: 6,
  fill: "#fff",
}


// Exemple d'utilisation
const getPoints = () => generateSinusoidalPath(
    startPosition,
    computeNumberOfPoint(props.niveau_max, NUMBER_OF_POINT_BETWEEN_LEVEL),      // Calculer le nombre des points
    20,     // espacement vertical
    250,    // amplitude (largeur du zigzag)
    NUMBER_OF_POINT_BETWEEN_LEVEL
);
const points = computed(() => getPoints().points);
const levels = computed(() => getPoints().levels);
const startPosition = {x: parseInt(configKonva.width / 2), y: configKonva.height - 40}; // Point de départ


const onClickLevel = (level) => {
  emit('click-level', level);
}

</script>

<template>
  <div class="quiz-container h-screen w-screen bg-[#00B161]">
    <v-stage :config="configKonva">
      <v-layer >
        <v-group>
          <v-circle v-for="pos in points" :config="{x:pos.x, y: pos.y ,...levelDot}"></v-circle>
          <NiveauButtons :niveau_actuel="niveau_actuel" :levels="levels" @click-level="onClickLevel" />
        </v-group>

      </v-layer>
    </v-stage>
  </div>
</template>

<style scoped>


</style>
