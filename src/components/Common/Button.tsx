
import { Link } from "react-router-dom"

interface BtnProps {
    title: string
    link: string,
    
}
interface ButtonTransparentProps{
    title: string 
    link: string,
    border:string
}
export const ButtonBlue = ({ title, link }: BtnProps) => {
    return (
        <>
            <Link to={link}><button className='flex gap-2 items-center bg-Bright_Blue border border-Bright_Blue text-white px-5  py-2 rounded-md font-medium'>
                {title}
            </button>
            </Link>
        </>
    )
}


export const ButtonTransparent = ({ title, link ,border }: ButtonTransparentProps) => {
    return (
        <>
            <Link to={link}>
                <button className={`bg-transparent  border-[1px] border-${border} px-5 py-2 rounded-[8px] font-bold`}>
                    {title}
                </button>
            </Link>
        </>
    )
}