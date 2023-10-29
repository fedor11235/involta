<template>
  <div class="input-single">
    <div class="input-single__title">{{ title }}</div>
    <div class="input-single__view">
      <div class="input-single__view_value">{{ modelValue }}</div>
      <div class="input-single__view_value">{{ modelValue }}</div>
      <div class="input-single__view_substrate"></div>
      <SliderControl
        @update:modelValue="handlerModelEvent"
        v-model="modelValueMinSlider"
        :minValue="minValue"
        :maxValue="maxValue"
        isRevert
        class="slider-min"
      />
      <SliderControl
        @update:modelValue="handlerModelEvent"
        v-model="modelValueMaxSlider"
        :minValue="minValue"
        :maxValue="maxValue"
        class="slider-max"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRef } from 'vue'

const props = defineProps<{
  title: string;
  modelValue: number;
  maxValue :number;
  minValue? :number;
  isPercent? :boolean;
}>();

const modelValueMinSlider = toRef(props.modelValue)
const modelValueMaxSlider = toRef(props.modelValue)

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const percent = ref()

function handlerModelEvent(percentValue:number) {
  emit("update:modelValue", percentValue)
  percent.value = percentValue
}
</script>

<style lang="scss" scoped>
.input-single {
  &__title {
    color: #3D4543;
    font-family: GilroyRegular;
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    margin-bottom: 13px;
    pointer-events: none;
    user-select: none;
  }
  &__view {
    position: relative;
    border-radius: 100px;
    background-color: #F1F5F5;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.02);
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 58px;
    padding: 20px 20px 22px 20px;
    justify-content: space-between;
    &_value {
      color: #545863;
      font-family: GilroyRegular;
      font-size: 16px;
      font-weight: 500;
      line-height: 140%;
      pointer-events: none;
      user-select: none;
    }
    &_percent {
      color: #083E4C;
      font-family: GilroyRegular;
      font-size: 16px;
      font-weight: 500;
      line-height: 100%;
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
      background-color: #083E4C;
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