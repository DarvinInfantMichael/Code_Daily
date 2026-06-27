import { useState } from "react"
import { useNavigate } from "react-router-dom"


const DashBoard = () => {

  const nav=useNavigate();

  const HandleClick=()=>{
    localStorage.removeItem("Auth")
    nav("/");
  }

  const [data,setData]=useState({});

  const ans =JSON.parse(localStorage.getItem("Auth"));


  
  


  return (
    <div>
      <div>
        <h1>
          User Dashboard
        </h1>

        <h1>
          {ans.userName}
        </h1>
        <h1>
          {ans.userEmail}
        </h1>

        <button onClick={HandleClick}>LogOut</button>
      </div>
    </div>
  )
}

export default DashBoard