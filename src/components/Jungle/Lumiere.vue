<script setup>

</script>

<template>
  <div class="nuage absolute top-1/3 inset-0 -z-0">
    <div class="lumiere">
      <span style="--i:1;"></span>
      <span style="--i:3;"></span>
      <span style="--i:16;"></span>
      <span style="--i:5;"></span>
      <span style="--i:13;"></span>
      <span style="--i:20;"></span>
      <span style="--i:6;"></span>
      <span style="--i:7;"></span>
      <span style="--i:10;"></span>
      <span style="--i:8;"></span>
      <span style="--i:17;"></span>
      <span style="--i:11;"></span>
      <span style="--i:12;"></span>
      <span style="--i:14;"></span>
      <span style="--i:2;"></span>
      <span style="--i:9;"></span>
      <span style="--i:15;"></span>
      <span style="--i:4;"></span>
      <span style="--i:19;"></span>
      <span style="--i:18;"></span>
    </div>
  </div>
</template>

<style scoped>

.lumiere {
  position: relative;
  display: flex;
  z-index: 1;
  padding: 0 20px;
}

.lumiere span {
  position: relative;
  bottom: 50px;
  display: block;
  margin: 0 2px 50px;
  width: 100px;
  min-height: 8px;
  background: white;
  border-radius: 32% 68% 80% 20% / 30% 17% 83% 70%;
  animation: animate 5s linear infinite;
  filter: blur(10px);
  animation-delay: calc(var(--i) * -0.5s);
}

@keyframes animate {
  0% {
    transform: translateX(0) scaleY(1);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  50% {
    transform: translateX(0) scaleY(5);
  }
  95% {
    opacity: 0;
  }
  100% {
    transform: translateX(-150px) scaleY(10);
  }

}

</style>