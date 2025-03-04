import { MdOutlineMailOutline } from "react-icons/md";
import TextField from '@mui/material/TextField';


export const NewsletterPlain = () =>{
    return(
        <div className="flex border border-Soft_Gray_20 items-center justify-start my-5 gap-5 p-3 rounded-lg"> 
        <input type="email" className="outline-0 h-8 bg-transparent" placeholder="Enter Your email"/>
        <button>
            <MdOutlineMailOutline size={24} className="text-Slate_Gray"/>
        </button>
        </div>
    )
}

export const Newsletter = () =>{
    return(
        <form className="handlesubscribe">
<TextField
  id="outlined-basic"
  label="Enter your Email"
  variant="outlined"
  sx={{ width: 300 }}
  inputProps={{ style: { height: 20} }} // Adjust padding if needed
/>        </form>
    )  
}