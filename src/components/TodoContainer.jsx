import { React } from "react"
import AddToDoform from "./AddToDoform"
import TodoForm from "./TodoForm"
import { useState } from "react"
function TodoContainer(){
    const [activityArr,setActivityArr]=useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Take a shower"
        },
        {
            id:3,
            activity:"Have breakfast"
        }
    ])
    return(
<div>
    <div className="flex  gap-5 flex-wrap">
          <AddToDoform activityArr={activityArr} setActivityArr={setActivityArr}/>
         <TodoForm activityArr={activityArr} setActivityArr={setActivityArr}/>
          </div>
        </div>
    )
}
export default TodoContainer