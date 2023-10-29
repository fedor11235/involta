<template>
  <div class="page" ref="page">

    <ClientOnly fallback-tag="div" class="cards" fallback="Загрзка изоражений...">
      <div class="cards" :style="{ scale: scaleCards}">
        <card v-for="cardImg of cardsImg" :key="cardImg" :img="cardImg" />
      </div>
    </ClientOnly>

  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

import card from "@/components/card.vue"

import cardOne from "~/assets/img/card-one.jpg"
import cardTwo from "~/assets/img/card-two.jpg"
import cardThree from "~/assets/img/card-three.jpg"

const scaleCards = ref(1)
const page = ref()

const widthNormal = 1440

const cardsImg = [
  cardOne,
  cardTwo,
  cardThree
]

function handlerResize() {
  const width = window.innerWidth
  if(width > widthNormal) {
    scaleCards.value = 1
  } else {
    scaleCards.value = width / widthNormal
  }
}

onMounted(() => {
  handlerResize();
  page.value.addEventListener('resize', handlerResize);
})
</script>

<style lang="scss">
.page {
  width: 100vw;
  height: 100vh;
  .cards {
    display: flex;
    column-gap: 36px;
    justify-content: center;
  }
}
</style>
