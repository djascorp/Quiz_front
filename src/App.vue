<script setup>
import Quiz_1 from "./components/Quiz_1.vue";
import Quiz_2 from "./components/Quiz_2.vue";

const onClickLevel = (level) => {
  console.log("NIVEAU CLICKÉ",level);
}
</script>

<template>
    <!-- <Quiz_1/> -->
   <Quiz_2 :niveau_actuel="3" :niveau_max="10" @click-level="onClickLevel" />

</template>

<style scoped>

</style>



<!--<div class="relative h-screen w-screen overflow-hidden">-->
<!--&lt;!&ndash; Section Parallax &ndash;&gt;-->
<!--<div-->
<!--    class="absolute top-0 left-0 w-[200vw] h-full bg-gradient-to-r from-blue-500 to-purple-700"-->
<!--    style="transform: translateX(-20%);"-->
<!--&gt;</div>-->

<!--&lt;!&ndash; Contenu défilant &ndash;&gt;-->
<!--<div class="relative z-10 h-full w-screen overflow-x-scroll snap-x snap-mandatory">-->
<!--  <div class="flex w-[200vw] h-full snap-start bg-white">-->
<!--    <div class="w-1/2 flex items-center justify-center bg-gray-100">-->
<!--      <Quiz_1 />-->
<!--    </div>-->
<!--    <div class="w-1/2 flex items-center justify-center bg-gray-200">-->
<!--      <Quiz_2 />-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->
<!--</div>-->
