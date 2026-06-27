import { useNavigate } from "react-router-dom"

const Home = () => {
    const nav=useNavigate();

    const HandleClick=()=>{
        nav("/registration")

    }
  return (
    <div className="bg-amber-200 p-5">
        <h1>Home</h1>
        <button onClick={HandleClick}>Rgister</button>
    </div>
  )
}

export default Home