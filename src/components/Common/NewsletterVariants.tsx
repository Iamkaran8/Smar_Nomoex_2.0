import TextField from '@mui/material/TextField';


export const NewsletterPlain = () => {
    return (
        <div className="flex border border-Soft_Gray_20 items-center justify-start my-5 gap-5 p-3 rounded-lg">
            <input type="email" className="outline-0 h-8 bg-transparent" placeholder="Enter Your email" />
            <button>
                <svg className="text-Slate_Gray" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
            </button>
        </div>
    )
}



export const Newsletter = () => {
    return (
        <form className="handlesubscribe">
            <TextField
                id="outlined-basic newsletter"
                label="Enter your Email"
                variant="outlined"
                sx={{ width: 300 }}
            />        
        </form>
    )
}