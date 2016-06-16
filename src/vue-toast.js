import Vue from 'vue'
import Toast from 'ttoast'

const VueToast = {}

VueToast.install = function(Vue) {
  Vue.prototype.$toast = Toast
}

export default VueToast