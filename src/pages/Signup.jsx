import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props){
const users=props.users 
const setusers=props.setusers
const[eusername,setEusername]=useState()
const[epassword,setEpassword]=useState()
const navigate=useNavigate()
function handleInput(evt){
    setEusername(evt.target.value)
}
function handlePassword(evt){
    setEpassword(evt.target.value)
}
function addUser(){
    setusers([...users,{username:eusername,password:epassword}])
    navigate('/')
}
    return(
       
        <div className="bg-black p-10">
<div className="bg-[#EFEFEF] p-10 border rounded-md">
         <h1 className="text-3xl font-medium">Hey hi</h1>
         <p>Signup here :)</p>
         <div className="flex flex-col gap-2 my-2">
            <input type="text" onChange={handleInput} placeholder="username" className="w-52 border-black p-1 transparent border rounded-md"></input>
         </div>
         <div className="flex flex-col gap-2 my-2">
            <input type="text" onChange={handlePassword} placeholder="password" className="w-52 border-black p-1 transparent border rounded-md"></input>
         </div>
         <div className="flex flex-col gap-2 my-2">
            <input type="text" placeholder="confirm password" className="w-52 border-black p-1 transparent border rounded-md"></input>
         </div>
         <button onClick={addUser} className="bg-[#FCA201] w-24 p-1 rounded-md">Signup</button>
         <p>Don't have an account ?  <Link to="/" className="underline">Login</Link></p>
</div>
        </div>
    )
}
export default Signup