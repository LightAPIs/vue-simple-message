export type NotificationType = 'info' | 'warn' | 'error' | 'debug' | 'custom';

export interface NotificationItem {
  id: string;
  type: NotificationType;
  content: string;
  color?: string;
  background?: string;
}
