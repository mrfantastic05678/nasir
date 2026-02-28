"use client";

import dynamic from "next/dynamic";

// Dynamically import Chatbot with SSR disabled and no loading state
const Chatbot = dynamic(() => import("./Chatbot").then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => null,
});

export default function ChatbotWrapper() {
  return <Chatbot />;
}
