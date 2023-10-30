<template>
  <div class="input-double">
    <div class="input-double__title">{{ title }}</div>
    <div :class="['input-double__view', {'input-double__view_active': isInputactive}]">
      <div class="input-double__view_value">{{ sliderMin }}</div>
      <div class="input-double__view_value">{{ sliderMax }}</div>
      <div class="input-double__view_substrate"></div>
      <div class="input-double__view_separate"></div>
      <SliderControl
        @update:modelValue="handlerModelEventMin"
        @is-active="setActiveValue"
        v-model="modelValueMinSlider"
        isRevert
        class="slider-min"
      />
      <SliderControl
        @update:modelValue="handlerModelEventMax"
        @is-active="setActiveValue"
        v-model="modelValueMaxSlider"
        class="slider-max"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRef } from 'vue'
import { useCalculatorStore } from '~/store/calculator'
import { storeToRefs } from 'pinia'

const calculatorStore = useCalculatorStore()

const { isActive } = storeToRefs(calculatorStore)

const emit = defineEmits<{
  (e: "min-value", value: number): void;
  (e: "max-value", value: number): void;
}>();

const props = defineProps<{
  sliderMin: number;
  sliderMax: number;
  title: string;
  maxValue: number;
  isPercent? :boolean;
}>();

const modelValueMinSlider = toRef(props.sliderMin)
const modelValueMaxSlider = toRef(props.sliderMax)

const isInputactive = ref(false)

function handlerModelEventMin(percentValue:number) {
  const value = Number((props.maxValue/ 100 * percentValue).toFixed(1))
  emit("min-value", value)
}

function handlerModelEventMax(percentValue:number) {
  const value = Number((props.maxValue/ 100 * percentValue).toFixed(1))
  emit("max-value", value)
}

function setActiveValue(event:boolean) {
  isActive.value = event
  isInputactive.value = event
}
</script>

<style lang="scss" scoped>
.input-double {
  &__title {
    @include fontSet($color6, 14px, 100%);
    margin-bottom: 13px;
    pointer-events: none;
    user-select: none;
  }
  &__view {
    position: relative;
    border-radius: 100px;
    background-color: $color7;
    box-shadow: 0px 4px 15px 0px $color11;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 58px;
    padding: 20px 20px 22px 20px;
    justify-content: space-between;
    border: 1px solid $color7;
    &_active {
      border: 1px solid $color2;
    }
    &_separate {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 1px;
      height: 14px;
      background-color: $color9;
    }
    &_value {
      @include fontSet($color5, 16px, 140%);
      pointer-events: none;
      user-select: none;
    }
    &_percent {
      @include fontSet($color3, 16px, 100%);
      pointer-events: none;
      user-select: none;
    }
    &_substrate {
      position: absolute;
      bottom: 0;
      width: 16px;
      left: 50%;
      translate: -50% 0%;
      height: 3px;
      background-color: $color3;
    }
    .slider-min {
      position: absolute;
      left: 25px;
      right: calc(50% + 8px);
      bottom: 0;
    }
    .slider-max {
      position: absolute;
      left: calc(50% + 8px);
      right: 25px;
      bottom: 0;
    }
  }
}
</style>