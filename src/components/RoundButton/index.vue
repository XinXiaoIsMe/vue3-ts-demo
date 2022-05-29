<script setup lang="ts">
defineEmits(['click'])
</script>

<template>
<button class="round-button" @click="$emit('click')">
  <slot></slot>
</button>
</template>

<style lang="scss" scoped>
.round-button {
  outline: none;
  border: 1px solid #fff;
  border-radius: 20px;
  background-color: purple;
  color: #fff;
  padding: 8px 20px;
}
</style>
