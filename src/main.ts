import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import './assets/styles/main.css'
import App from './App.vue'

const app = createApp(App)

const options = {
  // You can set your default options here
}

app.mount('#app')
app.use(Toast, options)
