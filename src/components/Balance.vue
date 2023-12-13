<template>
  <div>
    <h4 class="mb-2">YOUR BALANCE</h4>
    <h1 id="balance" class="text-xl font-medium">${{ total }}</h1>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
