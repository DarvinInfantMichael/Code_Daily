import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Registration = () => {

    const nav=useNavigate();

    const[userData,setUserData]=useState({ userName:"",userEmail:"",userPassword:""});

    const HandleChange =(e)=>{

        setUserData ( {...userData,[e.target.name] : e.target.value});

    }
    const HandleClick=(e)=>{

        e.preventDefault();

        if(!userData.userName||!userData.userEmail||!userData.userPassword){
            alert (" Fill the input feilds")
            return
        }

        const data=JSON.parse(localStorage.getItem("user"))||[];

        const check=data.find((e)=>e.userEmail===userData.userEmail)

        if(check){
            alert("This Email is Existing try with new for register")
            return
        }

        data.push(userData);

        localStorage.setItem("user",JSON.stringify(data));

        alert("User Data Added Succesfully....");

        setUserData ({ userName:"",userEmail:"",userPassword:""});

        nav("/login")
    }

  return (
    <div>
        <div>
            <h1>Rgistration Form </h1>
        </div>

        <div>
            <form>

                <label>Enter Name :</label>
                <input type="text"
                onChange={HandleChange}
                name="userName"
                value={userData.userName}
                placeholder="Enter User Name...."/>
                <br>
                </br>

                <label>Enter Email :</label>
                <input type="email"
                onChange={HandleChange}
                name="userEmail"
                value={userData.userEmail}
                placeholder="Enter User Email...."/>
                <br>
                </br>

                <label>Enter Password :</label>
                <input type="password"
                onChange={HandleChange}
                name="userPassword"
                value={userData.userPassword}
                placeholder="Enter User Password...."/>
                <br>
                </br>
                
                <button type="submit" onClick={HandleClick}>
                    Register
                </button>
            </form>

        </div>
    </div>
  )
}

export default Registration