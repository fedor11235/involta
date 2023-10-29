<template>
  <div class="checkbox">
    <div @click="handlerClick" class="checkbox__value">
      <Transition name="fade">
        <div v-if="modelValue" class="checkbox__value_circle"></div>
      </Transition>
    </div>
    <div class="checkbox__title">{{ text }}</div>
  </div>
</template>

<script lang="ts" setup>

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const props = defineProps<{
  modelValue: boolean;
  text: string;
}>();

function handlerClick() {
  emit("update:modelValue", !props.modelValue)
}
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  column-gap: 10px;
  &__value {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 6px;
    border: 1px solid rgba(8, 62, 76, 0.50);
    background: var(--white, #FFF);
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.02);
    cursor: pointer;
    &_circle {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgba(8, 62, 76, 0.50);
    }
  }
  &__title {
    color: #3D4543;
    font-family: GilroyRegular;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
}
</style>