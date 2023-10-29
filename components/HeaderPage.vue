<template>
  <div class="header">
    <div class="header__title">Варианты покупки</div>
    <div class="header__menu">
      <div class="header__menu_more">Подробнее</div>
      <div class="header__menu_arrows">
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  // padding: 0 55px;
  box-sizing: border-box;
  &__title {
    color: #3D4543;
    font-family: GilroyRegular;
    font-size: 42px;
    font-weight: 500;
    line-height: 120%;
  }
  &__menu {
    display: flex;
    column-gap: 20px;
    &_more {
      color: #083E4C;
      font-family: GilroyRegular;
      border: 1px solid #083E4C;
      border-radius: 100px;
      padding: 20px 25px;
      font-size: 16px;
      font-weight: 500;
      line-height: 100%;
      cursor: pointer;
    }
    &_arrows {
      display: flex;
      column-gap: 12px;
    }
  }
}
</style>
