interface BtnProps {
    title : string
}
export const ButtonBlue = ({title}:BtnProps) => {
    return (
        <>
            <button className='flex gap-2 items-center bg-Bright_Blue border border-Bright_Blue text-white px-5  py-2 rounded-md font-medium'>
                {title}
            </button>
        </>
    )
}


export const ButtonTransparent = ({title}:BtnProps) => {
    return (
        <>
            <button className='bg-transparent dark:border-white border border-black px-5 py-2 rounded-md font-medium'>
                {title}
            </button>
        </>
    )
}