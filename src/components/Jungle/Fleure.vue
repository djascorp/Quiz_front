<script setup>

</script>

<template>
  <div class="absolute left-0 bottom-0 inset-0 z-10 bg-cover bg-center motion-preset-slide-right transition-all duration-700 animate-slide-right" style="background-image: url('/img/fleure_2.svg');"></div>
  <div class="absolute right-0 bottom-0 inset-0 z-10 bg-cover bg-center motion-preset-slide-left duration-700 animate-slide-left" style="background-image: url('/img/fleure_1.svg');"></div>
</template>

<style scoped>
@keyframes slide-right {
  0% {
    transform: translateX(-50px);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50px);
  }
}

@keyframes slide-left {
  0% {
    transform: translateX(50px);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50px);
  }
}

.animate-slide-right {
  animation: slide-right 3s infinite ease-in-out;
}

.animate-slide-left {
  animation: slide-left 3s infinite ease-in-out;
}
</style>