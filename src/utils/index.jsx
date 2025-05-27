import { FiUsers, FiFileText } from "react-icons/fi";
import { FaRegCalendar } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { MdMicNone } from "react-icons/md";

import personalBranding from "../assets/personalBranding.webp";
import socialMediaManagement from "../assets/social-media.webp";
import videoProduction from "../assets/video-production.webp";
import publicRelations from "../assets/punlicRelation.webp";
import corporatePodcasting from "../assets/corporatePodcast.webp";

const servicesData = [
  {
    icon: <FiUsers className="h-6 w-6 text-white" />,
    title: "Personal Branding",
    image: personalBranding,
    description:
      "At Celebralux, we help ambitious professionals, entrepreneurs, and thought leaders build powerful personal brands that command attention and trust. Through strategic storytelling, premium visual identity, and consistent digital presence, we position you as an authority in your field. From refining your brand voice to managing your social media and online reputation, our team ensures your personal brand reflects your true value—and attracts high-impact opportunities.",
  },
  {
    icon: <FaRegCalendar className="h-6 w-6 text-white" />,
    title: "Social Media Management",
    image: socialMediaManagement,
    description:
      "End-to-end management of content calendars, visuals, reels, stories, and performance analytics.",
  },
  {
    icon: <IoVideocamOutline className="h-6 w-6 text-white" />,
    title: "Video Production",
    image: videoProduction,
    description:
      "High-quality shoots and edits for events, interviews, vlogs, podcasts, and brand campaigns.",
  },
  {
    icon: <FiFileText className="h-6 w-6 text-white" />,
    title: "Public Relations",
    image: publicRelations,
    description:
      "Press coverage, media placements, event presence, and reputation management across channels.",
  },
  {
    icon: <MdMicNone className="h-6 w-6 text-white" />,
    title: "Corporate Podcasting",
    image: corporatePodcasting,
    description:
      "Premium podcast production and business storytelling at our Kochi-based studio.",
  },
];

export default servicesData;
