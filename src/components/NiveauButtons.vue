<script setup>
const emit = defineEmits(['click-level']);
  const { levels } = defineProps({
    levels: Array
  });

  const levelCircle = {
    radius: 30,
    fill: "#D2CABD",
    stroke: "#938C81",
    strokeWidth: 4
  };

  const onClickLevel = (level) => {
    emit('click-level', level.level);
  }

</script>

<template>
  <v-group>
    <v-group v-for="(level,index) in levels"  @click="onClickLevel(level)" :key="'LEVEL-'+index">
      <v-circle :config="{x: level.x, y:level.y, ...levelCircle}"></v-circle>
      <v-text :config="{x:level.x - 6, y: level.y - 9, text: level.level, fontSize: 22, align: 'center', }" />
    </v-group>

  </v-group>
</template>