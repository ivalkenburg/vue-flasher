<template>
  <div :class="classes" role="alert">
    <span v-text="item.text" class="text-capitalize"></span> – Lorem ipsum
    dolor...
    <button
      v-if="item.duration < 0"
      @click="item.close"
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ['item'],
  computed: {
    classes() {
      return [
        'alert',
        'alert-' + this.item.type,
        { 'alert-dismissible': this.item.duration < 0 }
      ];
    }
  }
};
</script>
