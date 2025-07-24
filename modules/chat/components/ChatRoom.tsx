"use client";

import useSWR from "swr";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import ChatAuth from "./ChatAuth";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import ChatItemSkeleton from "./ChatItemSkeleton";

import { MessageProps } from "@/common/types/chat";
import useNotif from "@/hooks/useNotif";

export const ChatRoom = ({ isWidget = false }: { isWidget?: boolean }) => {
  const { data: session } = useSession();
  const notif = useNotif();

  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isReply, setIsReply] = useState({ is_reply: false, name: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleClickReply = (name: string) => {
    if (!session?.user) return notif("Please sign in to reply");
    setIsReply({ is_reply: true, name });
  };

  const handleCancelReply = () => {
    setIsReply({ is_reply: false, name: "" });
  };

  const handleSendMessage = async (message: string) => {
    const newMessageData = {
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      message,
      is_reply: isReply.is_reply,
      reply_to: isReply.name,
      is_show: true,
    };
    try {
      await axios.post("/api/chat", newMessageData);
      notif("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      notif("Failed to send message");
    }
  };

  const handleDeleteMessage = async (id: string) => {
    try {
      await axios.delete(`/api/chat/${id}`);
      notif("Message deleted successfully!");
    } catch (error) {
      notif("Failed to delete message");
    }
  };

  useEffect(() => {
    let pollingInterval: NodeJS.Timeout;

    const pollMessages = async () => {
      try {
        const response = await axios.get("/api/chat");
        const latestMessages: MessageProps[] = response.data;

        setMessages((prevMessages) => {
          const prevIds = prevMessages.map((msg) => msg.id);
          const newIds = latestMessages.map((msg) => msg.id);

          const hasNew = newIds.some((id) => !prevIds.includes(id));
          const hasDeleted = prevIds.some((id) => !newIds.includes(id));

          if (hasNew || hasDeleted) {
            return latestMessages;
          }

          return prevMessages;
        });

        setIsLoading(false);
      } catch (error) {
        console.error("Polling error:", error);
        setIsLoading(false);
      }
    };

    pollMessages();
    pollingInterval = setInterval(pollMessages, 3000);

    return () => clearInterval(pollingInterval);
  }, []);

  return (
    <>
      {isLoading ? (
        <ChatItemSkeleton />
      ) : (
        <ChatList
          messages={messages}
          onDeleteMessage={handleDeleteMessage}
          onClickReply={handleClickReply}
          isWidget={isWidget}
        />
      )}
      {session ? (
        <ChatInput
          onSendMessage={handleSendMessage}
          onCancelReply={handleCancelReply}
          replyName={isReply.name}
          isWidget={isWidget}
        />
      ) : (
        <ChatAuth isWidget={isWidget} />
      )}
    </>
  );
};
