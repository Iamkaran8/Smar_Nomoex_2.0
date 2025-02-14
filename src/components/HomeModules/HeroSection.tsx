import getstarted from '../../assets/getstarted.png'
import { useState, useEffect } from "react";
import mobilepreview from "../../assets/mobilepreview.png";
import mobilepreview_dark from "../../assets/mobilepreview_dark.png";
import mobilepreview_mb from "../../assets/mobilepreview_mb.png";
import mobilepreview_mb_dark from "../../assets/mobilepreview_mb_dark.png";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
export const HeroSection = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize(); // Set initial value on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='cont'>
            {isMobile ? (
                <>
                    <img className="w-[75%] md:w-[30%] absolute -z-10 top-0 right-0" src={isDark ? mobilepreview_mb_dark : mobilepreview_mb} alt="Mobile Preview Light" />
                </>
            ) : (
                <>
                    <img className="w-[55%] absolute -z-10 top-0 right-0" src={isDark ? mobilepreview_dark : mobilepreview} alt="Desktop Preview Light" />
                </>
            )}
            <div className="flex flex-col lg:flex-row py-14 lg:py-28 justify-center lg:justify-start text-center lg:text-start items-center">
                <div className="w-full md:w-[75%] lg:w-[60%]">
                    <h1>Start building your crypto <br/>portfolio today</h1>
                    <p>Discover how specific cryptocurrencies <br />work — and get a bit of each crypto to try out for yourself.</p>
                    <div className='flex lg:my-10 my-5 p-3 items-center justify-between rounded-md bg-[#ffffff99] dark:bg-[#0A0A0AAE] shadow-lg'>
                        <input className='outline-0 bg-transparent px-2' type="email" placeholder='Enter your Email to Start' />
                        <button className='flex gap-2 items-center bg-Bright_Blue text-white lg:px-10 px-5 md:px-2 py-4 rounded-md font-medium'>
                            <img src={getstarted} alt="icon" /><span className='hidden md:block'>Get Started</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}