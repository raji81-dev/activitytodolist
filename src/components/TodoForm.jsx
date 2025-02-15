import { useState } from "react"
import ToDoItem from "./ToDoItem"
function TodoForm(props){
   const activityArr=props.activityArr
   const setActivityArr=props.setActivityArr
    return(
        <div className="bg-[#BDB4EA] border-none rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
      
        {activityArr.length===0?  <p>You haven't anything added yet.</p>:""}
        
         {
           
            activityArr.map(function(item,index){
                debugger
                return(
                    <ToDoItem item={item} id={item.id} index={index} activityArr={activityArr} setActivityArr={setActivityArr}/>
                )
              
            })
         }       
      </div>
    )
}
export default TodoForm