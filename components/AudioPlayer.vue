<template>
  <div >
    <audio ref="player" controls>
        <source :src="url" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  url: string;
}>();

</script>

<style>
.test {
  color: red;
}
</style>
