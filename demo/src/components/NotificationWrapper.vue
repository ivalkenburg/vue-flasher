<template>
  <vue-notification-renderless :reverse="reverse" class="notification--wrapper">
    <div slot-scope="{ items }">
      <transition-group name="notification">
        <notification-item v-for="item in items" :item="item" :key="item.id"></notification-item>
      </transition-group>
    </div>
  </vue-notification-renderless>
</template>

<script>
import NotificationItem from "./NotificationItem";

export default {
  props: ["reverse"],
  components: {
    NotificationItem
  }
};
</script>

<style scoped>
.notification--wrapper {
  position: fixed;
  margin: 20px;
  bottom: 0;
  right: 0;
  width: 50%;
  max-width: 650px;
}

.notification-enter-active,
.notification-leave-active {
  transition: all 0.5s;
}

.notification-enter,
.notification-leave-to {
  opacity: 0;
  transform: translateX(60px);
}

.notification-move {
  transition: transform 0.2s;
}
</style>
