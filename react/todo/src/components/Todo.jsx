import { useState } from "react"

const Todo = () => {

    const[input,setInput]=useState("");
    const[output,setOutput]=useState([]);

    const HandleAdd =()=>{
        setOutput([...output,{input}]);

        setInput("");
    }

    const handleDelete = (index) => {
    setOutput(output.filter((_, i) => i !== index));
  };
  return (
    <div className="border-2 bg-green-200 p-5 mx-100 my-50 rounded-2xl min-h-screen">
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-bold text-green-600 mt-3">Todo List</h1>

            <label className="font-mono text-xl mt-3 text-black">Enter your Task </label>
            <input type="text"
            value={input}
            placeholder="Enter Here ..."
            onChange={(e)=>setInput(e.target.value)} className="border-2 rounded mt-3 text-xl"/>

            <button onClick={HandleAdd} className="bg-amber-300 p-3 w-20 rounded-2xl mt-3 text-xl font-bold">Add</button>

            <div className="font-bold">
                {output.map((e,i)=>(
                    <div>
                    <h1 key={i}/>
                    <h1 className="flex gap-4 mt-3 items-center">{e.input}
                        <button onClick={()=>handleDelete(i)} className="flex bg-red-600 p-3 rounded-2xl">Delete</button>
                    </h1>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Todo