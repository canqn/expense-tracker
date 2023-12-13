<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import Header from './components/Header.vue'
import Balance from './components/Balance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
interface Transaction {
  id: number
  text: string
  amount: number
}
const transactions = ref<Transaction[]>([])

// Get total
const total = computed<number>(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount
  }, 0)
})

// Get income
const income = computed<string>(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2)
})

// Get expenses
const expenses = computed<string>(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2)
})
// Generate unique ID
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000)
}

const onDelete = (id: number) => {
  if (!id) return toast.error('Transaction deleted fail.')

  transactions.value = transactions.value.filter((transaction) => transaction.id !== id)

  saveTransactionsToLocalStorage()

  toast.success('Transaction deleted.')
}

const handleTransactionSubmitted = (transactionData: { text: string; amount: number }) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount
  })

  saveTransactionsToLocalStorage()

  toast.success('Transaction added.')
}

onMounted(() => {
  const savedTransactions: Transaction[] | null = JSON.parse(localStorage.getItem('transactions'))

  if (savedTransactions) {
    transactions.value = savedTransactions
  }
})

// Save transactions to local storage
const saveTransactionsToLocalStorage = (): void => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen m-0">
    <div class="w-96 mx-auto my-5 flex flex-col gap-3">
      <Header />
      <Balance :total="total" />
      <IncomeExpenses :income="income" :expenses="expenses" />
      <TransactionList :transactions="transactions" @transaction-deleted="onDelete" />
      <AddTransaction @transaction-submitted="handleTransactionSubmitted" />
    </div>
  </div>
</template>

<style scoped></style>
