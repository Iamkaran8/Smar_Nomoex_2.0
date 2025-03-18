import { Link } from 'react-router-dom'
import image from '../assets/demo404.webp'
import { Navbar } from '../components/Common/Navbar'

export const NotFound = ()=>{
    return(
        <>
        <Navbar/>
        <div className='pb-10 flex dark:bg-black bg-white  items-center justify-center flex-col'>
        <img src={image} alt="Not FOund " />
        <h2 className=' text-[40px] text-white dark:text-white'>404 Page Not Found</h2>
        <br/>
        <Link to={'/'} className='bg-Bright_Blue text-white px-10 py-5 rounded-full'> Home Page</Link>
        </div>
        </>
    )
}