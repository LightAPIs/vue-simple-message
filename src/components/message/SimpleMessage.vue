<template>
  <div style="display: none">
    <svg
      id="simpleMessageCloseIcon"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="18px"
      height="18px"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      stroke="rgba(0, 0, 0, 0.6)"
    >
      <path d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575" />
    </svg>
  </div>
  <div class="vue-simple-message-frame-presentation">
    <transition-group tag="div" name="vue-simple-message-frame-notification">
      <div
        v-for="{ id, type, content } in list"
        :key="id"
        class="vue-simple-message-frame-notification"
        :class="'vue-simple-message-frame-notification-' + type"
      >
        <i class="vue-simple-message-frame-close-btn" title="Close" @click.stop="onClose(id)">
          <svg>
            <use xlink:href="#simpleMessageCloseIcon"></use>
          </svg>
        </i>
        <div class="vue-simple-message-frame-content">{{ content }}</div>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts" name="SimpleMessage">
import type { NotificationItem } from './index';

const props = defineProps<{
  list: NotificationItem[];
}>();

const emit = defineEmits<{
  (e: 'update:list', list: NotificationItem[]): void;
  (e: 'close', id: string): void;
}>();

function onClose(id: string) {
  emit(
    'update:list',
    props.list.filter(item => item.id !== id)
  );
  emit('close', id);
}
</script>

<style scoped>
.vue-simple-message-frame-presentation {
  max-width: 320px;
  position: fixed;
  top: 20px;
  right: 0px;
  z-index: 1000000;
  pointer-events: none;
}
.vue-simple-message-frame-notification {
  display: block;
  box-sizing: inherit;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: #333366;
  color: #ffffff;
  margin: 10px;
  position: relative;
  min-width: 240px;
  backface-visibility: hidden;
  pointer-events: all;
  border-radius: 3px;
  padding: 16px 20px;
}
.vue-simple-message-frame-notification.vue-simple-message-frame-notification-error {
  background-color: #f91717;
}
.vue-simple-message-frame-notification.vue-simple-message-frame-notification-warn {
  background-color: #b8b810;
}
.vue-simple-message-frame-notification.vue-simple-message-frame-notification-debug {
  background-color: #700270;
}
.vue-simple-message-frame-notification-enter-active,
.vue-simple-message-frame-notification-leave-active {
  transition: all 0.5s ease;
}
.vue-simple-message-frame-notification-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.vue-simple-message-frame-notification-leave-to {
  opacity: 0;
}
.vue-simple-message-frame-close-btn {
  position: absolute;
  right: 4px;
  top: 4px;
  width: 18px;
  height: 18px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.vue-simple-message-frame-close-btn svg {
  width: 18px;
  height: 18px;
}
.vue-simple-message-frame-content {
  margin-top: 5px;
  word-break: break-all;
}
</style>
