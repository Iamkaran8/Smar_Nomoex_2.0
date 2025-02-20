import { LayOut } from "../components/Common/Layout/DashboardLayout"

const CurrentPage = () =>{
    return(
        <>
         <h1>Assets</h1>
        </>
    )
}

export const Assets = () =>{
    return(
        <LayOut dynamic={<CurrentPage/>} title="Assets"/>
    )
}