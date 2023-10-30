<template>
  <div class="input-single">
    <div class="input-single__title">{{ title }}</div>
    <div :class="['input-single__view', {'input-single__view_active': isInputactive}]">
      <div class="input-single__view_value">{{ numberWithSpaces(modelValue) }} {{ textValue }}</div>
      <div v-if="isPercent" class="input-single__view_percent">{{ percent }}%</div>
      <SliderControl
        @update:modelValue="handlerModelEvent"
        @is-active="setActiveValue($event)"
        v-model="percent"
        class="slider"
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

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const props = defineProps<{
  title: string;
  modelValue: number;
  maxValue :number;
  textValue? :string;
  isPercent? :boolean;
}>();

const percent = ref(props.modelValue / (props.maxValue/ 100))
const isInputactive = ref(false)

function handlerModelEvent(percentValue:number) {
  const value = Math.trunc(props.maxValue/ 100 * percentValue)
  emit("update:modelValue", value)
  percent.value = percentValue
}

function setActiveValue(event:boolean) {
  isActive.value = event
  isInputactive.value = event
}

function numberWithSpaces(value: number) {
  var parts = value.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}
</script>

<style lang="scss" scoped>
.input-single {
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
    border: 1px solid $color7;
    box-shadow: 0px 4px 15px 0px $color11;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 58px;
    padding: 20px 20px 22px 20px;
    justify-content: space-between;
    &_active {
      border: 1px solid $color2;
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
    .slider {
      position: absolute;
      bottom: 0;
      left: 25px;
      right: 25px;
    }
  }
}
</style>