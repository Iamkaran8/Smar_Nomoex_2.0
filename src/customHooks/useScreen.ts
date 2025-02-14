// import { useState, useEffect } from "react";

// const useScreen = (breakpoint: number = 1028): boolean => {
//     const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < breakpoint);

//     useEffect(() => {
//         const handleResize = () => setIsMobile(window.innerWidth < breakpoint);

//         handleResize(); // Set initial value on mount
//         window.addEventListener("resize", handleResize);

//         return () => window.removeEventListener("resize", handleResize);
//     }, [breakpoint]);

//     return isMobile;
// };

// export default useScreen;
import { useState, useEffect } from "react";

const useScreen = (mobileBreakpoint: number = 768, tabletBreakpoint: number = 1024) => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < mobileBreakpoint);
    const [isTablet, setIsTablet] = useState<boolean>( window.innerWidth >= mobileBreakpoint && window.innerWidth < tabletBreakpoint );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mobileBreakpoint);
            setIsTablet(window.innerWidth >= mobileBreakpoint && window.innerWidth < tabletBreakpoint);
        };

        handleResize(); // Set initial value on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [mobileBreakpoint, tabletBreakpoint]);

    return { isMobile, isTablet };
};

export default useScreen;
