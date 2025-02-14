import { Link } from "react-router-dom"

interface BtnProps {
    title: string
    link: string
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


export const ButtonTransparent = ({ title, link }: BtnProps) => {
    return (
        <>
            <Link to={link}>
                <button className='bg-transparent dark:border-white border border-black px-5 py-2 rounded-md font-medium'>
                    {title}
                </button>
            </Link>
        </>
    )
}