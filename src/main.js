import Vue from 'vue'
import App from './App.vue'
import vuelidate from 'vuelidate'






import 'bootstrap/dist/css/bootstrap.css'

Vue.use(vuelidate)









Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
