<template>
  <div class="input-single">
    <div class="input-single__title">{{ title }}</div>
    <div class="input-single__view">
      <div class="input-single__view_value">{{ modelValue }} {{ textValue }}</div>
      <div v-if="isPercent" class="input-single__view_percent">{{ percent }}%</div>
      <SliderControl
        @update:modelValue="handlerModelEvent"
        v-model="modelValueSlider"
        :minValue="minValue"
        :maxValue="maxValue"
        class="slider"
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
  textValue? :string;
  minValue? :number;
  isPercent? :boolean;
}>();

const modelValueSlider = toRef(props.modelValue)

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
    .slider {
      position: absolute;
      bottom: 0;
      left: 25px;
      right: 25px;
    }
  }
}
</style>