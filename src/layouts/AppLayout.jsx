import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import HeroBanner from "../components/HeroBanner"


export default function AppLayout ({nameApp}){

    return(
        <>
        <Header nameApp={nameApp}/>
          <Outlet/>
        </>
    )
}