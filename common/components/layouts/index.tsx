"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ChatButton from "@/modules/chat/components/ChatButton";
import Sidebar from "./sidebar";

const Notif = dynamic(() => import("../elements/Notif"), { ssr: false });

interface LayoutsProps {
  children: React.ReactNode;
}

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 24 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const Layouts = ({ children }: LayoutsProps) => {
  const pathname = usePathname();
  const isShowChatButton = pathname !== "/chat";

  return (
    <div className="mx-auto max-w-7xl lg:px-12">
      <div className="mx-auto flex flex-col lg:flex-row lg:gap-5 lg:py-4">
        <Sidebar />
        <motion.main
          className="max-w-[854px] lg:w-4/5"
          initial={pageMotion.initial}
          animate={pageMotion.animate}
          exit={pageMotion.exit}
          transition={pageMotion.transition}
        >
          {children}
        </motion.main>
      </div>

      <Notif />
      {isShowChatButton && <ChatButton />}
    </div>
  );
};

export default Layouts;
