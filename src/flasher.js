import Events from './events';

export default {
    name: 'vue-flasher',
    props: {
        reverse: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            items: [],
        };
    },
    methods: {
        generateId() {
            return Math.random().toString(36).substr(2);
        },
        addItem(event) {
            let item = {
                id: this.generateId(),
                close: () => this.closeItem(item),
                ...event
            };

            if (item.duration > 0) {
                item.timer = setTimeout(() => item.close(item), item.duration);
            }

            if (this.reverse) {
                this.items.unshift(item);
            } else {
                this.items.push(item);
            }
        },
        closeItem(item) {
            this.items.splice(this.items.indexOf(item), 1);
        },
    },
    mounted() {
        Events.$on('flash', this.addItem);
    },
    beforeDestroy() {
        Events.$off('flash', this.addItem);
    },
    render() {
        return this.$scopedSlots.default({items: this.items, close: this.closeItem});
    }
}
