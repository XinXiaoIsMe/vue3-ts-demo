import { createApp } from 'vue'
import App from './App.vue'
import { registerComponent } from './libs'
import { createPinia } from 'pinia'
import { router } from './router'
import { i18n } from './lang/index'
import { registerDirectives } from '@/directives'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'

const app = createApp(App)

// register component librarys
registerComponent(app)
// register directives
registerDirectives(app)

app
 .use(createPinia())
 .use(router)
 .use(i18n)
 .mount('#app')
