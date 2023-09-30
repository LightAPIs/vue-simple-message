export type NotificationType = 'info' | 'warn' | 'error' | 'debug';

export interface NotificationItem {
  id: string;
  type: NotificationType;
  content: string;
}
