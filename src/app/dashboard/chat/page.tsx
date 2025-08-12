import { GiHummingbird } from "react-icons/gi";
import ChatInput from "./components/chat-input";

export default function DashboardChatPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <GiHummingbird className="text-muted mb-40 h-[200px] w-[200px]" />
      <ChatInput />
    </div>
  );
}
