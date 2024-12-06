<template>
  <button type="button" @click="onTest()">Test Random</button>
  <button type="button" @click="onTest('info')">Test Info</button>
  <button type="button" @click="onTest('warn')">Test Warn</button>
  <button type="button" @click="onTest('error')">Test Error</button>
  <button type="button" @click="onTest('debug')">Test Dubug</button>
  <button type="button" @click="onTest('custom')">Test Custom</button>
  <button type="button" @click="onTest(undefined, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')">Test Long Message</button>
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

function onTest(type?: NotificationType, content?: string) {
  type = type || randomType();
  count.value++;
  if (type === 'custom') {
    notifications.value.push({
      id: count.value.toString(),
      type,
      content: content || `${type} content: ${count.value}`,
      color: '#000000',
      background: '#ffffff',
    });
  } else {
    notifications.value.push({
      id: count.value.toString(),
      type,
      content: content || `${type} content: ${count.value}`,
    });
  }
}

function onClose(id: string) {
  notifications.value = notifications.value.filter(item => item.id !== id);
}
</script>
