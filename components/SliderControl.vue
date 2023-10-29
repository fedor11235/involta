<template>
  <div
    @pointerdown.prevent="handlerPointerdown"
    class="slider"
    ref="slider"
  >
    <div class="slider_range" :style="rangeStyle"></div>
    <div
      :style="thumbStyle"
      class="slider_thumb"
    >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const props = defineProps<{
  modelValue: number;
  maxValue :number;
  minValue? :number;
  isRevert? :boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

let minValue = props.minValue
if(!minValue) {
  minValue = 0
}
const rangeAll = props.maxValue - minValue

const slider:Ref<HTMLDivElement | null> = ref(null)

const percent = ref(
  props.modelValue / (props.maxValue / rangeAll)
)

const rangeStyle = computed(() => {
  if(props.isRevert) {
    return {
      marginLeft: `${rangeAll - percent.value}%`,
      width: `${percent.value}%`
    }
  }
  return {
    width: `${percent.value}%`
  }
})

const thumbStyle = computed(() => {
  if(props.isRevert) {
    return {
      left: `calc(${rangeAll - percent.value}% - 6px)`
    }
  }
  return {
    left: `calc(${percent.value}% - 6px)`
  }
})

function handlerPointerdown() {
  document.addEventListener('pointermove', handlerPointermove)
  document.addEventListener('pointerup', handlerPointerup)
}

function handlerPointerup() {
  document.removeEventListener('pointermove', handlerPointermove)
  document.removeEventListener('pointerup', handlerPointerup)
}

function handlerPointermove(e:any) {
  if(!slider.value) return
  const width = slider.value.getBoundingClientRect().width
  const offsetX = e.pageX - slider.value.getBoundingClientRect().left
  let percentCalc = Math.trunc(offsetX / (width / rangeAll))
  if(props.isRevert) {
    percentCalc = rangeAll - percentCalc
  }
  if(percentCalc > 100) {
    percent.value = 100
    return
  } else if(percentCalc < 0) {
    percent.value = 0
    return
  }
  percent.value = percentCalc
  const value = Math.trunc(props.maxValue / rangeAll * percentCalc)
  emit("update:modelValue", value)
}
</script>

<style lang="scss" scoped>
.slider {
  &_range {
    height: 3px;
    background-color: #083E4C;
  }
  &_thumb {
    position: absolute;
    bottom: -6px;
    width: 12px;
    height: 12px;
    border-radius: 40px;
    border: 2px solid #F5F7F5;
    background-color: #083E4C;
    cursor: pointer;
  }
}
</style>