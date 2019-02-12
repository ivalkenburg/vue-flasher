import Events from './events';
import VueNotificationRenderless from './flasher';
import 'mdn-polyfills/Object.assign';

export default {
  install(Vue, args = {}) {
    if (this.installed) {
      return;
    }

    this.installed = true;

    Vue.component(
      args.wrapper_name || VueNotificationRenderless.name,
      VueNotificationRenderless
    );

    Vue.prototype.$notification = data => Events.$emit('notification', data);
  }
};
