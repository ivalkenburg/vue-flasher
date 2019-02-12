# Vue-Notification-Renderless

Lightweight renderless flash message component.

- WIP - Don't use yet!
- Forked to allow per message duration, as opposed to a global duration

```javascript
this.$notification({
  type: 'alert',
  text: 'This is an alert!',
  duration: 5000
});
```

Demo: https://codesandbox.io/s/88v5v46xl9

## Installation

`npm add vue-notification-renderless`

then inside your project entry file:

```javascript
import Vue from 'vue';
import VueNotificationRenderless from 'vue-notification-renderless';

Vue.use(VueNotificationRenderless);
```
