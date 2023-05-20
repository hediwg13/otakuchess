import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from './storage/storage.js'

const vuetify = createVuetify({
    components,
    directives,
})
const app=createApp(App)
app.config.globalProperties.axios=axios
app.use(vuetify).mount('#app')
