<script setup>
import {NiveauColor} from "../utils/contant.js";

const emit = defineEmits(['click-level']);
const {levels, niveau_actuel} = defineProps({
  levels: Array,
  niveau_actuel: Number,
});

// fill: "#D2CABD",
// stroke: "#938C81",
const levelCircle = {
  radius: 30,
  strokeWidth: 4
};

const onClickLevel = (level) => {
  emit('click-level', level.level);
}

</script>

<template>
  <v-group>
    <v-group v-for="(level,index) in levels" @click="onClickLevel(level)" :key="'LEVEL-'+index">
      <v-circle :config="{
        x: level.x,
        y:level.y,
        fill: level.level <= niveau_actuel ? NiveauColor.AVAILABLE : NiveauColor.LOCKED,
        stroke :  level.level <= niveau_actuel ? NiveauColor.AVAILABLE_STROKE : NiveauColor.LOCKED_STROKE ,
        ...levelCircle
      }"></v-circle>
      <v-text :config="{
        x:level.x - 6,
        y: level.y - 9,
        text: level.level,
        fontSize: 22,
        align: 'center',
        }"/>
    </v-group>

  </v-group>
</template>