<template>
  <h3 class="font-medium text-lg pb-1 border-b-[1px] border-slate-200">History</h3>
  <ul id="list" class="list flex flex-col gap-2">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus border-r-4 border-red-600' : 'plus border-r-4 border-green-600'"
      class="bg-white shadow-sm shadow-slate-200 px-3 py-2 flex justify-between relative"
    >
      {{ transaction.text }} <span>${{ transaction.amount }}</span
      ><button class="delete-btn absolute cursor-pointer top-[50%] left-0" @click="deleteTransaction(transaction.id)">
        x
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  transactions: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['transactionDeleted'])

const deleteTransaction = (id) => {
  emit('transactionDeleted', id)
}
</script>

<style scoped>
.delete-btn {
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.list li:hover .delete-btn {
  opacity: 1;
}
</style>
