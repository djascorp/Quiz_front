<script setup>

</script>

<template>
  <div class="nuage absolute inset-0 -z-0 bg-no-repeat" style="background-image: url('/img/nuages.svg');"></div>
</template>

<style scoped>
.nuage {
  left: -20%;
  top: 5%;
 /* background: linear-gradient(90deg, #ffffff, #e0e0e0);
  filter: blur(.5px); */
  animation: nuage 200s linear infinite;
  animation-delay: 2s;
}

@keyframes nuage {
  0% {
    left: -20%;
    top: 5%;
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  100% {
    left: 120%;
    top: 5%;
    opacity: 0.8;
  }
}
</style>
