<template>
  <div class="inc-exp-container flex bg-white p-4 justify-around text-xl shadow-slate-300 shadow-md">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus text-green-600">+${{ income }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus text-red-600">-${{ expenses }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  income: {
    type: Number,
    required: true
  },
  expenses: {
    type: Number,
    required: true
  }
})
</script>

<style scoped></style>
