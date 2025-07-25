import {
  BiHomeCircle as HomeIcon,
  BiUser as AboutIcon,
  BiCollection as ProjectIcon,
  BiCategory as DashboardIcon,
  BiBook as ContactIcon,
  BiBook,
} from "react-icons/bi";
import { PiChatTeardropDotsBold as ChatRoomIcon } from "react-icons/pi";
import { PiCertificate as AchievementIcon } from "react-icons/pi";

import { MenuItemProps } from "../types/menu";

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Home",
  },
  {
    title: "About",
    href: "/about",
    icon: <AboutIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: About",
  },
  {
    title: "Achievements",
    href: "/achievements",
    icon: <AchievementIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Achievements",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Projects",
  },
  {
    title: "Blog",
    href: "/blog",
    icon: <BiBook size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Blog",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Dashboard",
  },
  {
    title: "Chat Room",
    href: "/chat",
    icon: <ChatRoomIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Chat Room",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Contact",
  },
];
