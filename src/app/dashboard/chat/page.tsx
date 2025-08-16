import { GiHummingbird } from "react-icons/gi";
import ChatInput from "./components/chat-input";
import { auth } from "~/server/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardChatPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <GiHummingbird className="text-muted mb-40 h-[200px] w-[200px]" />
      <ChatInput />
    </div>
  );
}
