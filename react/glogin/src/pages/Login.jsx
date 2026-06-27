import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const nav=useNavigate();

    const[userData,setUserData]=useState({userEmail:"",userPassword:""});

    const HandleChange =(e)=>{

        setUserData ( {...userData,[e.target.name] : e.target.value});

    }
    const HandleClick=(e)=>{

        e.preventDefault();

        if(!userData.userEmail||!userData.userPassword){
            alert (" Fill the input feilds")
            return
        }

        const data=JSON.parse(localStorage.getItem("user"));

        const check=data.find((e)=>e.userEmail===userData.userEmail && e.userPassword===userData.userPassword)

        if (!check) {
    alert("User Not Found...");
    return;
}

localStorage.setItem("Auth", JSON.stringify(check));

alert("Login Successful...");

setUserData({ userEmail: "", userPassword: "" });

nav("/dashboard");
    }

    const Handleit = () => {
    const users = JSON.parse(localStorage.getItem("user")) || [];

    console.log(users);

    if (users.length === 0) {
        alert("Please Register First");
        return;
    }

    localStorage.setItem("Auth", JSON.stringify(users[0]));

    console.log("Navigating...");

    nav("/dashboard");
}

  return (
    <div>
        <div>
            <h1>Login Form </h1>
        </div>

        <div>
            <form>

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
                    Login
                </button>
            </form>

            <button onClick={Handleit}>Login With Google...</button>

        </div>
    </div>
  )
}

export default Login