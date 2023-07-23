import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/router.js';
import { aliases, mdi } from 'vuetify/iconsets/mdi'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from './storage/storage.js'

const vuetify =createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})
export default createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})
const app=createApp(App)
app.config.globalProperties.axios=axios
app.use(vuetify);
app.use(router);
app.mount('#app');