import { MdOutlineMailOutline } from "react-icons/md";
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