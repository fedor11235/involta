<template>
  <div class="page" :style="{scale: scaleCards, height: `${1101 * scaleCards}px`}">
    <HeaderPage class="page__header" />
    <div class="page__cards">
      <CardInfo v-for="cardInfo of cardsInfo" :key="cardInfo.id" :img="cardInfo.img" :title="cardInfo.title" :text="cardInfo.text" />
    </div>
    <div class="page__info">
      <CalculatorMortgage />
      <div>
        <CardMortgage />
        <div class="page__warning">
          Приведенные расчеты носят предварительный характер. Окончательный расчет суммы кредита и размер ежемесячного платежа производится банком после предоставления оценки платежеспособности клиента.
        </div>
        <BtnControl v-model="isApply" version="filled">Подать заявку на точный расчёт</BtnControl>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

import cardOne from "~/assets/img/card-one.jpg"
import cardTwo from "~/assets/img/card-two.jpg"
import cardThree from "~/assets/img/card-three.jpg"

const widthNormal = 1440

const scaleCards = ref(1)
const isApply = ref(false)

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
  width: 1440px;
  height: 1101px;
  padding: 57.81px 55px;
  box-sizing: border-box;
  transform-origin: top;
  &__header {
    margin-bottom: 43px;
  }
  &__cards {
    display: flex;
    column-gap: 36px;
    margin-bottom: 75px;
  }
  &__info {
    display: flex;
    column-gap: 36px;
  }
  &__warning {
    @include fontSet($color8, 14px, 140%);
    width: 872px;
    margin-top: 25px;
    margin-bottom: 40px;
  }
}
</style>
