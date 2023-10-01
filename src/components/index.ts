import type { App } from 'vue';
import type { NotificationType, NotificationItem } from './message/index';
import SimpleMessage from './message/SimpleMessage.vue';

const components = [SimpleMessage];

function install(app: App) {
  components.forEach(component => {
    app.component(component.name, component);
  });
}

export { SimpleMessage };

export type { NotificationType, NotificationItem };

export default {
  install,
};
