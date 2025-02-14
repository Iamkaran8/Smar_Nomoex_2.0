import { IconType } from "react-icons";

// utility types
export interface SocialProps {
    name: string,
    url: string,
    icon: IconType; // Represents an imported React icon component
    color_light: string,
    color_dark: string,
}

export interface FeatureProps {
    icon: any,
    icon_white: any,
    title: string,
    description: string
}

export interface ThemeState {
    isDark: boolean;
}