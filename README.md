# vue-simple-message

## Preview

![preview](https://gcore.jsdelivr.net/gh/dragonish/images@main/img/202412022058827.jpg)

## Installation

```shell
npm install vue-simple-message
```

## Usage

### Global registration

In the entry file:

```typescript
import { createApp } from 'vue';
import SimpleMessage from 'vue-simple-message';
import App from './App.vue';

const app = createApp(App);
app.use(SimpleMessage);
app.mount('#app');
```

Example usage:

```html
<template>
  <simple-message v-model:list="list"></simple-message>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([]);
</script>
```

### Direct import

```html
<template>
  <simple-message :list="list" @close="onClose"></simple-message>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SimplePagination, type NotificationItem } from 'vue-simple-message';

const list = ref<NotificationItem[]>([]);

function onClose(id: string) {
  // ...
}
</script>
```

### Types

```typescript
type NotificationType = 'info' | 'warn' | 'error' | 'debug';

interface NotificationItem {
  id: string;
  type: NotificationType;
  content: string;
}
```

## License

[MIT](./LICENSE)
