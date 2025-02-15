import { useState } from "react"

function AddToDoform(props){
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr
    const [newActivity,setNewSctivity]=useState("")
    function handleChange(evt){
        debugger
        setNewSctivity(evt.target.value)
    }
    function addActivity(){
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
        setNewSctivity("")
    }
    return(
<div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
            <input type="text" value={newActivity} onChange={handleChange} placeholder="Next Activity" className="border border-black bg-transparent p-1"/>
            <button className="bg-black text-white p-1 border border-black" onClick={addActivity}>Add</button>
          </div>
          </div>
    )
}
export default AddToDoform