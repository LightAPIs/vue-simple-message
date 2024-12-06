export type NotificationType = 'info' | 'warn' | 'error' | 'debug' | 'custom';

export interface NotificationItem {
  /** Message ID */
  id: string;
  /** The type of message */
  type: NotificationType;
  /** Message content */
  content: string;
  /** Text color */
  color?: string;
  /** Window background color */
  background?: string;
}
