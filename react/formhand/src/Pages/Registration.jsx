import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Registration = () => {

    const nav=useNavigate();

    const[userData,setUserData]=useState({userName:"",userEmail:"",userPassword:""});
    

    const HandleChange =(e)=>{

        setUserData({...userData,[e.target.name]:e.target.value});
        
    }

    const HandleClick =(e)=>{

        e.preventDefault();

        if(!userData.userName ||!userData.userEmail ||!userData.userPassword){
            alert('Fill all inputs...')
            return
        }

        const db=JSON.parse(localStorage.getItem("Items"))||[];

        const em=db.find((e)=>e.userEmail===userData.userEmail);

        if(em){
            alert("Try with New Email, Email Already Exists..");
        }

        db.push(userData);

        localStorage.setItem("Items",JSON.stringify(db));

        alert("Data Added Sucessfully...");

        setUserData({userName:"",userEmail:"",userPassword:""});

        nav("/dashboard");


    }

    const HandleLogin=()=>{

        nav("/login");
    }

  return (
    <div>
        <div>
            <h1>Registration Form</h1>
        </div>

        <div>
            <form onSubmit={HandleClick}>

                <labeL>Enter Name: </labeL>
                <input type="text"
                onChange={HandleChange}
                name="userName"
                value={userData.userName}
                placeholder="Enter User Name..."/>
                <br>
                </br>

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

                <input type="submit" value={"Register"}/>

            </form>
            <div>
                    <h1> already Rgister? </h1>
                    <button onClick={HandleLogin}>Login</button>
                </div>
        </div>
    </div>
  )
}

export default Registration