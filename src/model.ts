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


export interface UserDataType {
    name: string;
    password: string;
    email: string;
    country: string;
    mobileNo: string;
    countrycode: string;
}



// Pagination props
export interface PaginationProps {
    totalNumberOfPage: number[];
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}


// Slice propeties are listed here you can check it down based on the file name
// NavmenuSlice.tsx
export interface NavlinkProps { 
    name: string; 
    url: string
}