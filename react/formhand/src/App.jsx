import { Routes , Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Registration from "./Pages/Registration"
import Login from "./Pages/Login"
import DashBoard from "./Pages/DashBoard"

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<DashBoard/>} />
      
    </Routes>
    </>
  )
}

export default App