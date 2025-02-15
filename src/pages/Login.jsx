import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login(props){
    const navigate=useNavigate()
const[eusername,setEusername]=useState()
const[epassword,setEpassword]=useState()
const[ruser,setRuser]=useState(true)
    const users=props.users
    var userfound=false
    function Checkuser(){
        users.forEach(function(item){
            if(item.username==eusername && item.password==epassword){
               navigate('/landing',{state:{user:eusername}})
                console.log("login success")
                userfound=true
            }
          
        })
        if(userfound==false){
            console.log("login failed")
            setRuser(false)
           }
    }
    function handleuinput(evt){
        setEusername(evt.target.value)
    }
    function handleupassword(evt){
        setEpassword(evt.target.value)
    }
    return(
        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
                 <h1 className="text-3xl font-medium">Hey hi</h1>
                 {ruser?<p>I help you you manage Activites after you login :)</p>:<p className="text-red-500">Please signup before you login</p>}
                 
                 <div className="flex flex-col gap-2 my-2">
                    <input type="text" onChange={handleuinput} placeholder="username" className="w-52 border-black p-1 transparent border rounded-md"></input>
                 </div>
                 <div className="flex flex-col gap-2 my-2">
                    <input type="text" onChange={handleupassword} placeholder="password" className="w-52 border-black p-1 transparent border rounded-md"></input>
                 </div>
                 
                 <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={Checkuser}>Login</button>
                 <p>Already have an account ?  <Link to="/Signup" className="underline">Signup</Link></p>
        </div>
                </div>
    )
}
export default Login