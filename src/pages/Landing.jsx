 import { useState } from 'react'
 import Header from '../components/header'
 import Card from '../components/card'
 import TodoContainer from '../components/TodoContainer'
import '../index.css'
 import { useLocation } from "react-router-dom"
function Landing(){
    const data=useLocation()
    return(
        <div className="bg-black p-15">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
           <Header name={data.state.user}></Header>
           <div className="flex justify-between gap-7 my-5 flex-wrap">
           <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
           <Card bgcolor={"#FD6663"} title={"February"} subtitle={"10:52:07"}/>
           <Card bgcolor={"#FDA201"} title={"Built Using"} subtitle={"React"}/>
           </div>
           <TodoContainer/>
        </div>
       
     </div>
    )
}
export default Landing