import Events from './events';
import VueFlasher from './flasher';

export default {
    install(Vue, args = {}) {
        if (this.installed) {
            return;
        }

        this.installed = true;

        Vue.component(args.wrapper_name || VueFlasher.name, VueFlasher);

        Vue.prototype.$flash = data => Events.$emit('flash', data);
    }
};