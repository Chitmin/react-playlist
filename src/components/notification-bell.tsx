import { Bell } from "lucide-react";

export function NotificationBell({ count = 0 }: { count?: number }) {
  return (
    <div className="relative inline-block">
      <Bell />
      {count > 0 && (
        <div className="absolute top-[-4px] bottom-[auto] right-[-10px] left-[auto] bg-destructive text-white rounded-[40%] px-2 py-1 w-6 h-4 whitespace-nowrap text-[10px] font-light leading-[0.7] inline-block text-center">
          <span>{count}</span>
        </div>
      )}
    </div>
  );
}
