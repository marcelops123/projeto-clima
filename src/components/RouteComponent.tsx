import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { Main } from "./Main"

export const RouteComponent = () => {
    return (
        <Routes>
            <Route index element={<Main/>}/>
        </Routes>
    )
}