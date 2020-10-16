import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

import localization from 'vue_3_localization'

app.use(store)
app.use(router)
app.use(localization, {language: {useCurrentLanguage: true}})
app.mount('#app')

