import { MdOutlineMailOutline } from "react-icons/md";
export const NewsletterPlain = () =>{
    return(
        <div className="flex border items-center justify-start my-5 p-3">
        <input type="email" className="outline-0 h-8 bg-transparent"/>
        <button>
            <MdOutlineMailOutline/>
        </button>
        </div>
    )
}