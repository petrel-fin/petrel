import { Badge } from "~/components/ui/badge";
import { GiHummingbird } from "react-icons/gi";

export default function DashboardChatPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-end gap-72 px-48 pb-24">
      <GiHummingbird className="text-muted h-[200px] w-[200px]" />
      <div className="h-[100px] w-full rounded-2xl border bg-gray-500/10 p-4">
        <p className="text-muted-foreground">Type message here...</p>
      </div>
    </div>
  );
}
