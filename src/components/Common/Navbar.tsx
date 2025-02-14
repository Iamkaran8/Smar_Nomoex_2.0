import { Link } from "react-router-dom"
import { Navlinks } from "../Utilities/Urls"
import { ButtonBlue, ButtonTransparent } from "./Button"
import nomoex from '../../assets/Nomoex_Full_logo.svg'

export const Navbar = () => {
    return (
        <div className="dark:z-10 bg-transparent dark:bg-black sticky top-0">
            <div className="cont py-5">
                <div className="flex justify-between items-center">
                    <div>
                        <img src={nomoex} className="w-[120px]" alt="nomoex" />
                    </div>
                    <div className="flex gap-5 items-center">
                        <ul className="flex gap-7">
                            {Navlinks.map((items, index)=>
                            <li key={index}>
                                <Link to={items.url}><h5>{items.name}</h5></Link>
                            </li>
                            )}
                        </ul>
                        <ButtonTransparent title="Sign in" link="/signup"/>
                        <ButtonBlue title="Get Started"  link="/signin"/>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}