<script setup>

import BG_default from "./Jungle/BG_default.vue";
import Nuage from "./Jungle/Nuage.vue";
import Birds from "./Jungle/Birds.vue";
import Fleure from "./Jungle/Fleure.vue";
import Defauts from "./Jungle/Defauts.vue";
import Lumiere from "./Jungle/Lumiere.vue";
</script>

<template>
  <div class="overflow-hidden bg-[#9FDAE0] relative mx-auto flex h-screen w-screen-xl pt-0 pb-6 sm:pt-6 my-auto">
    <Nuage/>
    <Birds/>
    <Defauts/>
    <Lumiere/>
    <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-sm mx-auto my-auto relative">
      <div
          class="relative z-10 lg:py-4 text-center bg-white p-4 rounded-md shadow-2xl animate-pop motion-preset-pop duration-500">
        <p class="text-2xl font-bold text-gray-800 text-center mx-auto max-w-xl uppercase animate-bounce-slow">
          Irrigants de france présente
        </p>
        <h1 class="text-[#3258A4] font-extrabold text-4xl md:text-5xl lg:text-5xl uppercase animate-expand-slow text_irrigant text-stroke">
          Tout savoir sur L’<span class="loader uppercase">eau</span>
        </h1>
      </div>
      <div class="my-4 flex justify-center relative z-10">
        <a-button type="primary" size="large" class="border-2 border-white">Commancez</a-button>
      </div>
    </div>
    <div class="absolute right-1/2 bottom-24 transform z-20">
      <img src="/img/eau.png" alt="Eau mascotte" class="water-drop"/>
    </div>
  </div>
  <!--  data-aos="zoom-in-up"-->
  <!--  <div class="overflow-hidden bg-[#9FDAE0] relative mx-auto flex h-screen w-screen-xl pt-0 pb-6 sm:pt-6 my-auto">-->
  <!--    <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-sm mx-auto my-auto relative">-->
  <!--      <div class="lg:py-4 text-center bg-red-600 p-4 rounded-md">-->
  <!--        <p class="text-2xl text-gray-300  text-center mx-auto max-w-xl uppercase">-->
  <!--          Irrigants de france présente-->
  <!--        </p>-->
  <!--        <div class="text-center">-->
  <!--          <h1 class="pt-4 text-black font-bold text-4xl md:text-5xl lg:text-5xl uppercase">-->
  <!--            Tout savoir sur l'eau-->
  <!--          </h1>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <Nuage/>-->
  <!--    <Birds/>-->
  <!--    <Fleure/>-->
  <!--    <Defauts/>-->
  <!--    <div class="absolute left-1/2 top-1/2 transform z-10">-->
  <!--      <img src="/img/eau.png" alt="Eau mascotte" class="water-drop"/>-->
  <!--    </div>-->
  <!--  </div>-->

  <!--  <div class="overflow-hidden flex items-center justify-center relative w-full h-full">-->

  <!--    <div class="absolute inset-0 -z-10 bg-[#9FDAE0]"></div>-->
  <!--    <Nuage/>-->
  <!--    <Birds/>-->
  <!--    <Fleure/>-->
  <!--    <Defauts/>-->

  <!--    <div class="relative flex flex-col items-center justify-start pt-48 h-screen text-center">-->

  <!--      <a-card class=" relative animate-pop motion-preset-pop duration-500">-->
  <!--        <h2 class="text-[#000] text-2xl sm:text-3xl md:text-4xl font-bold animate-bounce-slow md:whitespace-nowrap break-words">-->
  <!--          IRRIGANTS DE FRANCE PRÉSENTE-->
  <!--        </h2>-->

  <!--        <h2 class="text-[#3258A4] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-expand-slow text_irrigant text-stroke md:whitespace-nowrap break-words">-->
  <!--          TOUT SAVOIR SUR L’<span class="loader uppercase">EAU</span>-->
  <!--        </h2>-->
  <!--      </a-card>-->

  <!--      <div class="absolute left-1/2 top-1/2 transform z-10">-->
  <!--        <img src="/img/eau.png" alt="Eau mascotte" class="water-drop"/>-->
  <!--      </div>-->

  <!--      <div class="-z-10 lumiere">-->
  <!--        <span style="&#45;&#45;i:1;"></span>-->
  <!--        <span style="&#45;&#45;i:3;"></span>-->
  <!--        <span style="&#45;&#45;i:16;"></span>-->
  <!--        <span style="&#45;&#45;i:5;"></span>-->
  <!--        <span style="&#45;&#45;i:13;"></span>-->
  <!--        <span style="&#45;&#45;i:20;"></span>-->
  <!--        <span style="&#45;&#45;i:6;"></span>-->
  <!--        <span style="&#45;&#45;i:7;"></span>-->
  <!--        <span style="&#45;&#45;i:10;"></span>-->
  <!--        <span style="&#45;&#45;i:8;"></span>-->
  <!--        <span style="&#45;&#45;i:17;"></span>-->
  <!--        <span style="&#45;&#45;i:11;"></span>-->
  <!--        <span style="&#45;&#45;i:12;"></span>-->
  <!--        <span style="&#45;&#45;i:14;"></span>-->
  <!--        <span style="&#45;&#45;i:2;"></span>-->
  <!--        <span style="&#45;&#45;i:9;"></span>-->
  <!--        <span style="&#45;&#45;i:15;"></span>-->
  <!--        <span style="&#45;&#45;i:4;"></span>-->
  <!--        <span style="&#45;&#45;i:19;"></span>-->
  <!--        <span style="&#45;&#45;i:18;"></span>-->
  <!--      </div>-->

  <!--      <div class="absolute left-1/2 bottom-24 transform z-10">-->
  <!--        <a-button type="primary" class="w-full">Primary Button</a-button>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<style scoped>
.loader {
  display: inline-block;
  color: #5ABBD0;
  letter-spacing: 2px;
  position: relative;
  box-sizing: border-box;
  -webkit-text-stroke: 2px #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
}

.loader::after {
  content: 'eau';
  position: absolute;
  left: 0;
  top: 0;
  color: #3258A4;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
  -webkit-text-stroke: 2px #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
}

@keyframes animloader {
  0% {
    height: 100%;
  }
  100% {
    height: 0;
  }
}

.text_irrigant {
  -webkit-text-stroke: 2px #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
}

/* Animation Pop */
@keyframes pop {
  0% {
    transform: scale(0.85);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-pop {
  animation: pop 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

/* Animation Bounce (Lent) */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 1.5s ease-in-out alternate;
}

/* Animation Expand (Lent) */
@keyframes expand-slow {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-expand-slow {
  animation: expand-slow 1.2s ease-out forwards;
}

/* Image de la goutte d'eau */
.water-drop {
  width: 150px; /* Ajustez selon vos besoins */
  animation: bounce 2s infinite ease-in-out, sparkle 3s infinite ease-in-out;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes sparkle {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.1);
  }
}


</style>
