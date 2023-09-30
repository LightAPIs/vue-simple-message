<template>
  <button type="button" @click="onTest">Test</button>
  <simple-message :list="notifications" @close="onClose"></simple-message>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { NotificationType, NotificationItem } from './components/index';

const count = ref(0);
const notifications = ref<NotificationItem[]>([]);

function randomType(): NotificationType {
  const random = Math.random();
  if (random > 0.75) {
    return 'error';
  } else if (random > 0.5) {
    return 'warn';
  } else if (random > 0.25) {
    return 'info';
  } else {
    return 'debug';
  }
}

function onTest() {
  count.value++;
  const type = randomType();
  notifications.value.push({
    id: count.value.toString(),
    type,
    content: `${type} content: ${count.value}`,
  });
}

function onClose(id: string) {
  notifications.value = notifications.value.filter(item => item.id !== id);
}
</script>
