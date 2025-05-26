import { NotificationProvider } from "@/path/to/notification-context"; // ganti path sesuai project kamu

export default function NotificationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <NotificationProvider>
      {children}
    </NotificationProvider>
  );
}
