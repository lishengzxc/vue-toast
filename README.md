# vue-ttoast

Toast Component for Vue

[![npm](https://img.shields.io/npm/v/vue-ttoast.svg?style=flat-square)](https://www.npmjs.com/package/vue-ttoast)
[![npm](https://img.shields.io/npm/l/vue-ttoast.svg?style=flat-square)](https://www.npmjs.com/package/vue-ttoast)
[![npm](https://img.shields.io/npm/dt/vue-ttoast.svg?style=flat-square)](https://www.npmjs.com/package/vue-ttoast)

## Demo
[https://lishengzxc.github.io/toast/](https://lishengzxc.github.io/toast/)

## Install
```
npm install vue-ttoast --save
```

## Usage
#### html
```html
<body>
  <button v-on:click="clickHandler">toast</button>
  <script src="http://cdn.bootcss.com/vue/1.0.24/vue.min.js"></script>
  <script src="dist/dist.js"></script>
</body>
```
#### js
```javascript
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
```

## API
### Basic
```javascript
Toast('hello world~')
```

### Duration
```javascript
Toast({
  message: 'hello world~',
  duration: 5000
});
```

## LICENSE
MIT