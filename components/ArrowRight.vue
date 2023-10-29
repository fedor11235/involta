<template>
  <svg @pointerenter="handlerPointerEnter" @pointerleave="handlerPointerLeave" class="arrow" xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
    <g :opacity="isHover? 1: 0.4" class="arrow__view">
      <path d="M61 30.8125C61 47.381 47.5685 60.8125 31 60.8125C14.4315 60.8125 1 47.381 1 30.8125C1 14.244 14.4315 0.8125 31 0.8125C47.5685 0.8125 61 14.244 61 30.8125Z" stroke="#083E4C"/>
      <path d="M35.5 29.9465C36.1667 30.3314 36.1667 31.2936 35.5 31.6785L29.5 35.1426C28.8333 35.5275 28 35.0464 28 34.2766L28 27.3484C28 26.5786 28.8333 26.0975 29.5 26.4824L35.5 29.9465Z" fill="#083E4C"/>
    </g>
  </svg>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isHover = ref(false)

function handlerPointerEnter() {
  isHover.value = true
}
function handlerPointerLeave() {
  isHover.value = false
}
</script>

<style lang="scss" scoped>
.arrow {
  cursor: pointer;
  &__view {
    transition: all .6s;
  }
}
</style>

  