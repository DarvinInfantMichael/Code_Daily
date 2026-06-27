import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Login = () => {

    const nav=useNavigate();

    const[userData,setUserData]=useState({userEmail:"",userPassword:""});
    

    const HandleChange =(e)=>{

        setUserData({...userData,[e.target.name]:e.target.value});
        
    }

    const HandleClick =(e)=>{

        e.preventDefault();

        if(!userData.userEmail ||!userData.userPassword){
            alert('Fill all inputs...')
            return
        }

        const db=JSON.parse(localStorage.getItem("Items")) ;
       
        const em=db.find((e)=>e.userEmail===userData.userEmail && e.userPassword===userData.userPassword);
            

         if(!em){
            alert("User Not Found...");
            return
        }

        

        // db.push(userData);

        localStorage.setItem("Auth",JSON.stringify(em));
   


        alert("Login Succefully.....  Welcome Back");

        setUserData({userName:"",userEmail:"",userPassword:""});

        nav("/dashboard");


    }

    const HandleDashBoard=()=>{

        nav("/dashboard");
    }

  return (
    <div>
        <div>
            <h1>Login Form</h1>
        </div>

        <div>
            <form onSubmit={HandleClick}>

                <labeL>Enter Email: </labeL>
                <input type="email"
                onChange={HandleChange}
                name="userEmail"
                value={userData.userEmail}
                placeholder="Enter User Email..."/>
                <br>
                </br>

                <labeL>Enter Password: </labeL>
                <input type="password"
                onChange={HandleChange}
                name="userPassword"
                value={userData.userPassword}
                placeholder="Enter Passwrod.."/>
                <br>
                </br>

                <input type="submit" value={"Login"}/>

            </form>
        
        </div>
    </div>
  )
}

export default Login