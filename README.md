# Vue Notification Renderless

Lightweight renderless flash message component.

- WIP - Fits my current use case but is subject to change
- Provides functionality for stacked notifications but allows you to defined the html & css for layout. See demo for use.
- Forked from [ivalkenburg/vue-flasher](https://github.com/ivalkenburg/vue-flasher) initially to allow per message duration, as opposed to a global duration

```javascript
this.$notification({
  type: 'alert',
  text: 'This is an alert!',
  duration: 5000
});
```

Demo: https://codesandbox.io/s/88v5v46xl9  
Demo – Bootstrap 4 style alert: https://codesandbox.io/s/l42q46jjll

## Installation

`npm install vue-notification-renderless`

then inside your project entry file:

```javascript
import Vue from 'vue';
import VueNotificationRenderless from 'vue-notification-renderless';

Vue.use(VueNotificationRenderless);
```
