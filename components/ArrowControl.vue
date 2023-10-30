<template>
  <div @pointerdown="handlerPointerdown" :class="['btn-circle', {'btn-circle_active': modelValue}, {'btn-circle_disable': isDisable}]">
    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
      <path v-if="side === 'left'" class="btn-circle__arrow" d="M26.5 29.9465C25.8333 30.3314 25.8333 31.2936 26.5 31.6785L32.5 35.1426C33.1667 35.5275 34 35.0464 34 34.2766L34 27.3484C34 26.5786 33.1667 26.0975 32.5 26.4824L26.5 29.9465Z" :fill="modelValue? 'white':'#083E4C'"/>
      <path v-else-if="side === 'right'" class="btn-circle__arrow" d="M35.5 29.9465C36.1667 30.3314 36.1667 31.2936 35.5 31.6785L29.5 35.1426C28.8333 35.5275 28 35.0464 28 34.2766L28 27.3484C28 26.5786 28.8333 26.0975 29.5 26.4824L35.5 29.9465Z" :fill="modelValue? 'white':'#083E4C'"/>
    </svg>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const props = defineProps<{
  modelValue?: boolean;
  isDisable?: boolean;
  side: 'left' | 'right'
}>();

function handlerPointerdown() {
  if(props.isDisable) return
  emit('update:modelValue', true)
  document.addEventListener('pointerup', handlerPointerup)
}

function handlerPointerup() {
  emit('update:modelValue', false)
  document.removeEventListener('pointerup', handlerPointerup)
}

</script>

<style lang="scss" scoped>
.btn-circle {
  cursor: pointer;
  transition: opacity .3s, scale .3s, background-color .3s;
  width: 62px;
  height: 62px;
  border: 1px solid $color1;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  &_disable {
    opacity: .4;
    cursor: default;
  }
  &_active {
    scale: 1.12;
    background-color: $color1;
  }
}
</style>

  