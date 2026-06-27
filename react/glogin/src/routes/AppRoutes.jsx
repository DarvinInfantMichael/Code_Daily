import { Route, Routes } from "react-router-dom"

import Registration from "../pages/Registration"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"

const AppRoutes = () => {
  return (
    <>
    <div>
        <Routes>
            <Route path="/" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>

            
        </Routes>
    </div>
    </>
  )
}

export default AppRoutes