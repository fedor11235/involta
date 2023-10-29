<template>
  <div class="card-mortgage">
    <svg xmlns="http://www.w3.org/2000/svg" width="871" height="317" viewBox="0 0 871 317" fill="none">
      <path d="M0 30.8125C0 14.244 13.4315 0.8125 30 0.8125L521.257 0.8125C531.391 0.8125 540.839 5.92823 546.379 14.4138L552.121 23.2112C557.661 31.6968 567.109 36.8125 577.243 36.8125H841C857.569 36.8125 871 50.244 871 66.8125V286.812C871 303.381 857.569 316.812 841 316.812H30C13.4314 316.812 0 303.381 0 286.812L0 30.8125Z" fill="#083E4C"/>
    </svg>
    <div class="card-mortgage_title">
      Ипотека 0.1%
    </div>
    <div class="card-mortgage_more">
      Узнайте о других интересных предложениях
    </div>
    <div class="card-mortgage_info">
      <div v-for="info of infoMenu" :key="info.id" class="card-mortgage_info_item">
        <div class="card-mortgage_info_item_title">{{ info.title }}</div>
        <div class="card-mortgage_info_item_text">{{ info.text }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const infoMenu = [
  {
    id: 0,
    title: 'Ежемесячный платёж',
    text: '12 591 ₽'
  },
  {
    id: 1,
    title: 'Ставка',
    text: '0.1%'
  },
  {
    id: 2,
    title: 'Сумма кредита',
    text: '4 465 050 ₽'
  },
  {
    id: 3,
    title: 'Срок кредита',
    text: '5 лет'
  }
]
</script>

<style lang="scss" scoped>
.card-mortgage {
  position: relative;
  height: fit-content;
  &_title {
    position: absolute;
    top: 60px;
    left: 40px;
    color: #083E4C;
    font-family: GilroyRegular;
    font-size: 74px;
    font-weight: 500;
    line-height: 110%;
    padding: 12px 15px;
    border-radius: 16px;
    background-color: #FFF;
  }
  &_more {
    position: absolute;
    top: 0;
    right: 0;
    color: #3D4543;
    font-family: GilroyRegular;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
  &_info {
    position: absolute;
    left: 40px;
    bottom: 39px;
    display: flex;
    column-gap: 67px;
    &_item {
      &_title {
        color: rgba(255, 255, 255, 0.70);
        font-family: GilroyRegular;
        font-size: 14px;
        font-weight: 500;
        line-height: 100%;
        margin-bottom: 16px;
      }
      &_text {
        color: #FFF;
        font-family: GilroyRegular;
        font-size: 30px;
        font-weight: 500;
        line-height: 120%;
      }
    }
  }
}
</style>