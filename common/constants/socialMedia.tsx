import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTiktok as TiktokIcon,
} from "react-icons/bs";
import { SiGmail, SiYoutube } from "react-icons/si";

import { SocialMediaProps } from "../types/socialMedia";
import { FaSquareXTwitter } from "react-icons/fa6";

const iconSize = 35;
const backgroundIconSize = 275;

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    title: "Stay Connected",
    description:
      "Feel free to reach out via email for collaborations or inquiries.",
    name: "gmail",
    href: "mailto:arhyelphilip024@gmail.com",
    icon: <SiGmail size={iconSize} />,
    backgroundIcon: <SiGmail size={backgroundIconSize} />,
    textColor: "text-red-300",
    backgroundColor: "bg-red-300",
    borderColor: "border-red-300",
    backgroundGradientColor: "bg-gradient-to-b from-red-700 to-red-900",
    colSpan: "md:col-span-2",
    isShow: true,
  },
  {
    title: "Follow My Journey",
    description:
      "Get the latest updates, behind-the-scenes content, and stories on Instagram.",
    name: "instagram",
    href: "https://www.instagram.com/iamwyteshadow/",
    icon: <InstagramIcon size={iconSize} />,
    backgroundIcon: <InstagramIcon size={backgroundIconSize} />,
    textColor: "text-purple-200",
    backgroundColor: "bg-purple-200",
    borderColor: "border-purple-200",
    backgroundGradientColor:
      "bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500",
    isShow: true,
  },
  {
    title: "Let's Connect",
    description:
      "Network with me on LinkedIn and explore my professional background.",
    name: "linkedin",
    href: "https://www.linkedin.com/in/earhyel/",
    icon: <LinkedinIcon size={iconSize} />,
    backgroundIcon: <LinkedinIcon size={backgroundIconSize} />,
    textColor: "text-sky-300",
    backgroundColor: "bg-sky-300",
    borderColor: "border-sky-300",
    backgroundGradientColor: "bg-gradient-to-b from-sky-700 to-sky-900",
    isShow: true,
  },
  {
    title: "Join the Fun",
    description: "Catch my latest entertaining and engaging content on TikTok.",
    name: "tiktok",
    href: "https://www.tiktok.com/@earhyel/",
    icon: <TiktokIcon size={iconSize} />,
    backgroundIcon: <TiktokIcon size={backgroundIconSize} />,
    textColor: "text-neutral-400",
    backgroundColor: "bg-neutral-400",
    borderColor: "border-neutral-400",
    backgroundGradientColor: "bg-gradient-to-b from-neutral-700 to-neutral-900",
    isShow: true,
  },
  {
    title: "Explore My Code",
    description:
      "Check out my projects and open-source contributions on GitHub.",
    name: "github",
    href: "https://github.com/arhyel24",
    icon: <GithubIcon size={iconSize} />,
    backgroundIcon: <GithubIcon size={backgroundIconSize} />,
    textColor: "text-slate-400",
    backgroundColor: "bg-slate-400",
    borderColor: "border-slate-400",
    backgroundGradientColor: "bg-gradient-to-b from-slate-900 to-slate-950",
    isShow: true,
  },
  {
    title: "Follow Me on Twitter",
    description:
      "Join the conversation on Twitter for updates, insights, and more from the developer community.",
    name: "twitter",
    href: "https://twitter.com/earhyel",
    icon: <FaSquareXTwitter size={iconSize} />,
    backgroundIcon: <FaSquareXTwitter size={backgroundIconSize} />,
    textColor: "text-blue-300",
    backgroundColor: "bg-blue-500",
    borderColor: "border-blue-500",
    backgroundGradientColor: "bg-gradient-to-b from-blue-700 to-blue-900",
    isShow: true,
  },
  {
    title: "Watch & Learn",
    description:
      "Subscribe to my YouTube channel for tutorials, insights, and project showcases.",
    name: "youtube",
    href: "https://www.youtube.com/@earhyel",
    icon: <SiYoutube size={iconSize} />,
    backgroundIcon: <SiYoutube size={backgroundIconSize} />,
    textColor: "text-red-300",
    backgroundColor: "bg-red-500",
    borderColor: "border-red-500",
    backgroundGradientColor: "bg-gradient-to-b from-red-700 to-red-900",
    isShow: true,
  },
];
