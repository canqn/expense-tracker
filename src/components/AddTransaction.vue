<template>
  <h3 class="font-medium text-lg pb-1 border-b-[1px] border-slate-200">Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control flex flex-col">
      <label for="text" class="font-[500] mb-1">Text</label>
      <input
        type="text"
        id="text"
        placeholder="Enter text..."
        v-model="text"
        class="rounded-sm border border-slate-400 p-2 text-sm block outline-none"
      />
    </div>
    <div class="form-control flex flex-col">
      <label for="amount" class="font-[500] mb-1"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        type="number"
        id="amount"
        placeholder="Enter amount..."
        v-model="amount"
        class="rounded-sm border border-slate-400 p-2 text-sm block outline-none"
      />
    </div>
    <button class="btn bg-violet-600 block p-2 w-full shadow-sm shadow-slate-300 text-white mt-3">
      Add transaction
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
const toast = useToast()
const emit = defineEmits(['transactionSubmitted'])

const text = ref('')
const amount = ref('')
const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error('Both fields must be filled.')
    return
  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value)
  }

  emit('transactionSubmitted', transactionData)

  text.value = ''
  amount.value = ''
}
</script>

<style scoped>
/* .btn {
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
} */

.btn:focus,
.delete-btn:focus {
  outline: 0;
}
</style>
