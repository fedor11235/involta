<template>
  <div class="header">
    <div class="header__title">Варианты покупки</div>
    <div class="header__menu">
      <BtnControl v-model="isClickArroeRight" version="empty">Подробнее</BtnControl>
      <!-- <div :class="['header__menu_more', {'header__menu_more_active': isClickArroeRight}]">Подробнее</div> -->
      <div class="header__menu_arrows">
        <ArrowControl isDisable side="left" />
        <ArrowControl side="right" v-model="isClickArroeRight" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isClickArroeRight = ref(false)
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  &__title {
    @include fontSet($color6, 42px, 120%);
  }
  &__menu {
    display: flex;
    column-gap: 20px;
    &_arrows {
      display: flex;
      column-gap: 12px;
    }
  }
}
</style>
