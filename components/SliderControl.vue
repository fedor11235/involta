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
import { ref, computed, toRef } from 'vue'

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
  (e: "is-active", value: boolean): void;
}>();

const props = defineProps<{
  modelValue: number;
  isRevert? :boolean;
}>();

const allRercent = 100
const slider:Ref<HTMLDivElement | null> = ref(null)

const percent = toRef(props.modelValue)

const rangeStyle = computed(() => {
  if(props.isRevert) {
    return {
      marginLeft: `${allRercent - percent.value}%`,
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
      left: `calc(${allRercent - percent.value}% - 6px)`
    }
  }
  return {
    left: `calc(${percent.value}% - 6px)`
  }
})

function handlerPointerdown() {
  emit('is-active', true)
  document.addEventListener('pointermove', handlerPointermove)
  document.addEventListener('pointerup', handlerPointerup)
}

function handlerPointerup() {
  emit('is-active', false)
  document.removeEventListener('pointermove', handlerPointermove)
  document.removeEventListener('pointerup', handlerPointerup)
}

function handlerPointermove(e:any) {
  if(!slider.value) return
  const width = slider.value.getBoundingClientRect().width
  const offsetX = e.pageX - slider.value.getBoundingClientRect().left
  let percentCalc = Math.trunc(offsetX / (width / 100))
  if(props.isRevert) {
    percentCalc = allRercent - percentCalc
  }
  if(percentCalc > 100) {
    percent.value = 100
    return
  } else if(percentCalc < 0) {
    percent.value = 0
    return
  }
  percent.value = percentCalc
  emit("update:modelValue", percentCalc)
}
</script>

<style lang="scss" scoped>
.slider {
  &_range {
    height: 3px;
    background-color: $color3;
  }
  &_thumb {
    position: absolute;
    bottom: -6px;
    width: 12px;
    height: 12px;
    border-radius: 40px;
    border: 2px solid #F5F7F5;
    background-color: $color3;
    cursor: pointer;
  }
}
</style>