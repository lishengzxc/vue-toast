import Vue from 'vue'
import VueToast from './main'

Vue.use(VueToast)

new Vue({
  el: 'body',
  methods: {
    clickHandler() {
      this.$toast('hello')
    }
  }
})