import { DashboardLayout } from "../components/Common/Layout/DashboardLayout"

const CurrentPage = () =>{
    return(
        <>
         <h1>Assets</h1>
        </>
    )
}

export const Assets = () =>{
    return(
        <DashboardLayout dynamic={<CurrentPage/>} title="Assets"/>
    )
}