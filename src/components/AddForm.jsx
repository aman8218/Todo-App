import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";


export default function AddForm()
{

    const dispatch = useDispatch();
    const[task, setTask]=useState("")
    const submitHandler = (evt)=>{
        evt.preventDefault();
        //Don't add empty tasks
        if(!task.trim())
        {
            return ;
        }
        dispatch(addTodo(task));
        setTask("");
        // console.log(task)
        
    }
    return (
        <>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(e)=>setTask(e.target.value)} value={task} placeholder="Enter Task"/> <br /><br />
            <button className="btn btn-primary">Add Task</button> &nbsp; &nbsp;
        </form>
        </>
    )   
}