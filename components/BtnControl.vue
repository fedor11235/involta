<template>
  <div 
    @pointerdown="handlerPointerdown"
    :class="[
      'btn',
      {'btn_empty': version==='empty'},
      {'btn_filled': version==='filled'},
      {'btn_active': modelValue}
    ]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

defineProps<{
  version: 'empty' | 'filled'
  modelValue: boolean
}>();

function handlerPointerdown() {
  emit('update:modelValue', true)
  document.addEventListener('pointerup', handlerPointerup)
}

function handlerPointerup() {
  emit('update:modelValue', false)
  document.removeEventListener('pointerup', handlerPointerup)
}
</script>

<style lang="scss" scoped>
.btn {
  font-family: GilroyRegular;
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  border-radius: 100px;
  padding: 20px 25px;
  width: fit-content;
  cursor: pointer;
  transition:
    color .3s, background-color .3s, border .3s;
  &_empty {
    border: 1px solid #083E4C;
    color: #083E4C;
  }
  &_filled {
    border: 1px solid #083E4C;
    background: #083E4C;
    color: #FFF;
  }
  &_active {
    background-color: #005B73;
    color: white;
  }
}
</style>
