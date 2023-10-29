<template>
  <div class="layout-default">
    <ClientOnly fallback-tag="div" class="layout-default__load">
      <slot />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
body {
  margin: 0;
}
.layout-default {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  &__load {
    position: fixed;
    top: 50%;
    translate: 0 -50%;
    display: inline-block;
    width: 80px;
    height: 80px;
    &:after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #fff;
      border-color: #083E4C transparent #083E4C transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
