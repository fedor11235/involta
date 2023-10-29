<template>
  <div class="calculator">
    <div class="calculator__title">Ипотечный калькулятор</div>
    <div class="calculator__control">
      <InputDouble v-model="maximumCost" isPercent :maxValue="100" title="Стоимость, млн ₽" />
      <InputSingle v-model="initialFee" isPercent :maxValue="100" title="Первоначальный взнос, ₽" />
      <InputSingle v-model="PaymentDeadline" textValue="лет" :maxValue="100" title="Срок выплат" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const maximumCost = ref(40)
const initialFee = ref(10)
const PaymentDeadline = ref(40)

onMounted(() => {

})
</script>

<style lang="scss" scoped>

.calculator {
  display: inline-block;
  padding: 45px 35px;
  border-radius: 40px;
  border: 1px solid #083E4C;
  width: 420px;
  margin-left: 55px;
  &__title {
    display: inline-block;
    border-radius: 10px;
    background: rgba(8, 62, 76, 0.50);
    padding: 10px;

    color: #FFF;
    font-family: GilroyRegular;
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    margin-bottom: 30px;
  }
  &__control {
    display: flex;
    flex-direction: column;
    row-gap: 36px;
  }
}
</style>
