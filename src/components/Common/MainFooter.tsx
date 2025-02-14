import { NewsletterPlain } from "./NewsletterVariants"

export const MainFooter = () =>{
    return(
        <div className="cont  border-t border-Soft_Gray">
            <div className="flex py-14 lg:py-20">
                <div className="w-1/3 flex flex-col items-start">
                <h3>Get crypto news every day</h3>
                <NewsletterPlain/>
                </div>
                <div className="w-2/3 bg-Red">dsfsd</div>
            </div>
        </div>
    )
}