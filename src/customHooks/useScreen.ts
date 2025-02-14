import { useState, useEffect } from "react";

const useScreen = (breakpoint: number = 1028): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < breakpoint);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < breakpoint);

        handleResize(); // Set initial value on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
};

export default useScreen;
