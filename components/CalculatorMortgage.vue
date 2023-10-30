<template>
  <div class="calculator">
    <div :class="['calculator__title', {'calculator__title_active': isActive}]">Ипотечный калькулятор</div>
    <div class="calculator__control">
      <InputDouble
        @min-value="minCost = $event"
        @max-value="maxCost = $event"
        :sliderMin="minCost"
        :sliderMax="maxCost"
        isPercent
        :maxValue="10"
        title="Стоимость, млн ₽"
      />
      <div class="calculator__checkboxes">
        <CheckboxControl v-model="isRoom" text="Квартира"/>
        <CheckboxControl v-model="isApartment" text="Апартамент"/>
      </div>
      <InputSingle
        v-model="initialFee"
        isPercent
        :maxValue="5000000"
        title="Первоначальный взнос, ₽"
      />
      <InputSingle
        v-model="PaymentDeadline"
        textValue="лет"
        :maxValue="30"
        title="Срок выплат"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useCalculatorStore } from '~/store/calculator'
import { storeToRefs } from 'pinia'

const calculatorStore = useCalculatorStore()

const { isActive } = storeToRefs(calculatorStore)

const minCost = ref(3)
const maxCost = ref(2)
const initialFee = ref(2500000)
const PaymentDeadline = ref(5)
const isRoom = ref(false)
const isApartment = ref(false)
</script>

<style lang="scss" scoped>

.calculator {
  position: relative;
  display: inline-block;
  padding: 25px 35px 41px;
  border-radius: 40px;
  width: 420px;
  height: 519px;
  box-sizing: border-box;
  background-color: white;
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    background: linear-gradient(135deg, $color1, $color4);
    border-radius: 40px;
    z-index: -1;
  }
  &__title {
    @include fontSet(white, 14px, 100%);
    display: inline-block;
    border-radius: 10px;
    background: $color9;
    padding: 10px;
    margin-bottom: 30px;
    transition: background-color, .3s ease;
    &_active {
      background-color: $color1;
    }
  }
  &__control {
    display: flex;
    flex-direction: column;
    row-gap: 36px;
  }
  &__checkboxes {
    display: flex;
    column-gap: 20px;
  }
}
</style>
