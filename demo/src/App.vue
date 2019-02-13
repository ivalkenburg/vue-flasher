<template>
  <div>
    <notification-wrapper :reverse="reverse"/>

    <div class="grid">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        class="btn"
        :class="'btn-outline-' + button.type"
        @click="
          $notification({
            type: button.type,
            text: button.type,
            duration: button.duration
          });
        "
      >
        {{ button.type }}
        <span v-if="button.duration < 0">– only removed when close button clicked</span>
      </button>
    </div>

    <button class="btn btn-link" @click="reverse = !reverse;">Reverse messages: {{ reverse }}</button>
  </div>
</template>

<script>
import NotificationWrapper from "./components/NotificationWrapper";

export default {
  name: "app",
  components: {
    NotificationWrapper
  },
  data() {
    return {
      buttons: [
        {
          type: "primary",
          duration: -1
        },
        { type: "secondary", duration: 4000 },
        { type: "success", duration: 3000 },
        { type: "danger", duration: 5000 },
        { type: "warning", duration: 3000 },
        { type: "info", duration: 4000 },
        { type: "dark", duration: 3000 }
      ],
      reverse: true
    };
  }
};
</script>

<style>
body {
  background: #f0f0f0;
}
.grid {
  padding: 1rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
}
.btn {
  background: #fff;
  line-height: 1;
  min-height: 4rem;
}
.btn::first-letter {
  text-transform: uppercase;
}
</style>
