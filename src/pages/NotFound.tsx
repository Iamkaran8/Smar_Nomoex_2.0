import { Link } from 'react-router-dom'
import image from '../assets/demo404.webp'

export const NotFound = ()=>{
    return(
        <>
        <div className='flex items-center justify-center flex-col'>
        <img src={image} alt="Not FOund " />
        <h2 className=' text-[40px]'>404 Page Not Found</h2>
        <br/>
        <Link to={'/'} className='bg-Bright_Blue text-white px-10 py-5 rounded-full'> Home Page</Link>
        </div>
        </>
    )
}