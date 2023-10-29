<template>
  <div class="page">
    <HeaderPage class="page__header" :style="{ width: `${widthNormal * scaleCards}px`, padding: `0 ${55 * scaleCards}px`}"/>
    <ClientOnly fallback-tag="div" class="cards" fallback="Загрзка изоражений...">
      <div class="cards" :style="{ scale: scaleCards}">
        <card v-for="cardInfo of cardsInfo" :key="cardInfo.id" :img="cardInfo.img" :title="cardInfo.title" :text="cardInfo.text" />
      </div>
    </ClientOnly>
    <MortgageCalculator />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

import cardOne from "~/assets/img/card-one.jpg"
import cardTwo from "~/assets/img/card-two.jpg"
import cardThree from "~/assets/img/card-three.jpg"

const widthNormal = 1440

const scaleCards = ref(1)

const cardsInfo = [
  {
    id: 0,
    img: cardOne,
    title: 'Ипотека от 4,3%',
    text: 'Выгодные условия при оформлении у банков-партнеров'
  },
  {
    id: 1,
    img: cardTwo,
    title: 'Рассрочка 0%',
    text: 'Гибкие условия по размеру первоначального взноса, платежам и срокам'
  },
  {
    id: 2,
    img: cardThree,
    title: 'Покупка в Trade-in',
    text: 'Выгодный обмен старой квартиры на новую квартиру или апартаменты'
  },
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
  window.addEventListener('resize', handlerResize);
})
</script>

<style lang="scss" scoped>

.page {
  width: 100vw;
  height: 100vh;
  &__header {
    width: 1440px;
  }
  .cards {
    display: flex;
    column-gap: 36px;
    justify-content: center;
  }
}
</style>
