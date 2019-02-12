import Events from './events';

export default {
  name: 'vue-notification-renderless',
  props: {
    duration: {
      type: Number,
      default: 3000
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    generateId() {
      return Math.random()
        .toString(36)
        .substr(2);
    },
    addItem(event) {
      let item = {
        id: this.generateId(),
        close: () => this.closeItem(item),
        ...event
      };

      if (
        (item.duration && item.duration > 0) ||
        (this.duration && !item.duration)
      ) {
        item.timer = setTimeout(
          () => item.close(item),
          item.duration || this.duration
        );
      }

      if (this.reverse) {
        this.items.unshift(item);
      } else {
        this.items.push(item);
      }
    },
    closeItem(item) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  },
  mounted() {
    Events.$on('notification', this.addItem);
  },
  beforeDestroy() {
    Events.$off('notification', this.addItem);
  },
  render() {
    return this.$scopedSlots.default({
      items: this.items,
      close: this.closeItem
    });
  }
};
