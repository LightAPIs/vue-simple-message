# vue-simple-message

## Installation

```shell
npm install vue-simple-message
```

## Usage

in `.js`/`.ts` file:

```typescript
import SimpleMessage from 'vue-simple-message';

// ...
app.use(SimpleMessage)
// ...
```

in `.vue` file:

```html
<template>
  <simple-message v-model:list="list"></simple-message>
</template>

<script setup>
import { ref } from 'vue';
import type { NotificationItem } from 'vue-simple-message';

const list = ref([]);
</script>
```

or

```html
<template>
  <simple-message :list="list" @close="onClose"></simple-message>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { NotificationItem } from 'vue-simple-message';

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
