import { LayOut } from "../../Common/Layout/Layout"

const CurrentPage = () =>{
    return(
        <>
         <h1>Assets</h1>
        </>
    )
}

export const AssetsPage = () =>{
    return(
        <LayOut dynamic={<CurrentPage/>}/>
    )
}