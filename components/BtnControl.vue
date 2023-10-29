<template>
  <div class="btn">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.btn {
  color: #FFF;
  font-family: GilroyRegular;
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  border-radius: 100px;
  border: 1px solid #083E4C;
  background: #083E4C;
  padding: 20px 25px;
  width: fit-content;
  margin-top: 40px;
  cursor: pointer;
}
</style>
