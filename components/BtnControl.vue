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
  @include fontSet(white, 16px, 100%);
  border-radius: 100px;
  padding: 20px 25px;
  width: fit-content;
  cursor: pointer;
  transition:
    color .3s, background-color .3s, border .3s;
  &_empty {
    border: 1px solid $color3;
    color: $color3;
  }
  &_filled {
    border: 1px solid $color3;
    background: $color3;
    color: white;
  }
  &_active {
    background-color: $color1;
    color: white;
  }
}
</style>
