<template>
  <div class="page-default">
    <p>Some default layout content shared across all pages</p>
    <slot />
  </div>
</template>

<style>
.page-default {
  height: 100vh;
  width: 100vw;
}
</style>