import { SocialProps } from "../../model";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa6";
import { BsSlack } from "react-icons/bs";

export const Socials:SocialProps[] = [
    {
        name: "facebook",
        url: "https://www.nomoex.com/en_US/",
        icon: FaFacebookF, // ✅ Store component reference, not JSX
        color_light: "#1778F2",
        color_dark: "#fff"
    },
    {
        name: "slack",
        url: "https://www.nomoex.com/en_US/",
        icon: BsSlack,
        color_light: "#4A154B",
        color_dark: "#FFFFFF"
    },
    {
        name: "X",
        url: "https://www.nomoex.com/en_US/",
        icon: BsTwitterX,
        color_light: "#000",
        color_dark: "#fff"
    },
    {
        name: "Pinterest",
        url: "https://www.nomoex.com/en_US/",
        icon: FaPinterestP,
        color_light: "#EA0010",
        color_dark: "#fff"
    },
    {
        name: "linkedin",
        url: "https://www.nomoex.com/en_US/",
        icon: FaLinkedinIn,
        color_light: "#017EB2",
        color_dark: "#fff"
    }
];
