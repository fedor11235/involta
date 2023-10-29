<template>
<div class="card">
  <svg @pointerenter="handlerPointerEnter" @pointerleave="handlerPointerLeave" class="card__view" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="420" height="303" viewBox="0 0 420 303" fill="none">
    <path d="M0.458642 27.1687C0.481522 13.4179 11.6053 2.26692 25.356 2.21049L366 0.8125L395.694 1.63734C409.226 2.01322 420 13.0909 420 26.6277V39.3125V204.312C420 218.12 408.807 229.312 395 229.312H385C364.013 229.312 347 246.326 347 267.312V277.812C347 291.62 335.807 302.812 322 302.812H25.0416C11.2183 302.812 0.018666 291.594 0.0416665 277.771L0.458642 27.1687Z" fill="#D9D9D9"/>
    <path d="M0.458642 27.1687C0.481522 13.4179 11.6053 2.26692 25.356 2.21049L366 0.8125L395.694 1.63734C409.226 2.01322 420 13.0909 420 26.6277V39.3125V204.312C420 218.12 408.807 229.312 395 229.312H385C364.013 229.312 347 246.326 347 267.312V277.812C347 291.62 335.807 302.812 322 302.812H25.0416C11.2183 302.812 0.018666 291.594 0.0416665 277.771L0.458642 27.1687Z" :fill="`url(#pattern-${img})`"/>
    <path d="M0.458642 27.1687C0.481522 13.4179 11.6053 2.26692 25.356 2.21049L366 0.8125L395.694 1.63734C409.226 2.01322 420 13.0909 420 26.6277V39.3125V204.312C420 218.12 408.807 229.312 395 229.312H385C364.013 229.312 347 246.326 347 267.312V277.812C347 291.62 335.807 302.812 322 302.812H25.0416C11.2183 302.812 0.018666 291.594 0.0416665 277.771L0.458642 27.1687Z" fill="url(#paint0_linear_1_1842)" fill-opacity="0.7"/>
    <defs>
      <pattern :id="`pattern-${img}`" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use :xlink:href="`#imag-${img}`" transform="matrix(0.00156463 0 0 0.00245235 -0.157143 -0.370861)"/>
      </pattern>
      <image :class="{'card__image_scale': isHover}" :id="`imag-${img}`" width="840" height="559" :href="img"/>
      <linearGradient id="paint0_linear_1_1842" x1="172" y1="294.812" x2="172" y2="121.813" gradientUnits="userSpaceOnUse">
        <stop offset="0.500753"/>
        <stop offset="1" stop-opacity="0"/>
      </linearGradient>
    </defs>
  </svg>
  <svg class="card__btn" xmlns="http://www.w3.org/2000/svg" width="65" height="66" viewBox="0 0 65 66" fill="none">
    <circle cx="32.5" cy="33.3125" r="32.5" fill="#083E4C"/>
    <path d="M40.3889 33.1687C41.0556 33.5536 41.0556 34.5158 40.3889 34.9007L30.3889 40.6742C29.7222 41.0591 28.8889 40.578 28.8889 39.8082L28.8889 28.2612C28.8889 27.4914 29.7222 27.0103 30.3889 27.3952L40.3889 33.1687Z" fill="white"/>
  </svg>
  <svg class="card__delmiter" xmlns="http://www.w3.org/2000/svg" width="316" height="2" viewBox="0 0 316 2" fill="none">
    <path d="M0 0.8125H316" stroke="white"/>
  </svg>
  <div class="card__title">
    {{ title }}
  </div>
  <div class="card__text">
    {{ text }}
  </div>
</div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  title: string;
  text: string;
  img: string;
}>();

const isHover = ref(false)

function handlerPointerEnter() {
  isHover.value = true
}
function handlerPointerLeave() {
  isHover.value = false
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  &__title {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #545863;
    font-family: GilroyRegular;
    font-size: 26px;
    font-weight: 500;
    line-height: 130%;
    padding: 10px 12px;
    border-radius: 10px;
    background: #FFF;
  }
  &__text {
    position: absolute;
    top: 214px;
    left: 20px;
    width: 295px;
    color: #FFF;
    font-family: GilroyRegular;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
  }
  &__view {
    cursor: pointer;
  }
  &__image {
    &_scale {
      animation: scale .3s linear forwards;
      @keyframes scale {
        to {
          translate: -10% -10%;
          scale: 1.1;
        }
      }
    }
  }
  &__delmiter {
    position: absolute;
    top: 196px;
    left: 20px;
    z-index: 1;
  }
  &__btn {
    position: absolute;
    right: 0;
    bottom: 4px;
    width: 65px;
    height: 65px;
    cursor: pointer;
  }
}
</style>

