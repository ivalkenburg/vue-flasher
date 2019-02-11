# Vue-Flasher

Lightweight renderless flash message component.

Forked to allow per message duration, as opposed to a global duration:

```javascript
this.$flash({
  type: 'alert',
  text: 'This is an alert!',
  duration: 5000
});```

Demo: https://codesandbox.io/s/n5v0595394

## Installation

`yarn add vue-flasher`

then inside your project entry file:

```javascript
import Vue from 'vue';
import VueFlasher from 'vue-flasher';

Vue.use(VueFlasher);
```
