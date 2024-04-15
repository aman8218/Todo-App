import { useSelector } from 'react-redux';
import AddForm from './AddForm';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';
import { markAsDone } from '../features/todo/todoSlice';
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { viewAllTasks } from '../features/todo/todoSlice';

export default function Todo()
{
    const todos = useSelector((state)=> state.todos);
    const isView = useSelector(state => state.todos[0]?.isView);
    console.log(todos);
    
    const dispatch = useDispatch();
    const clickHandler = (id)=>{
        // console.log("delete", id)
        dispatch(deleteTodo(id));
    }

    const doneClicked = (id)=>{
        dispatch(markAsDone(id));
    }
    const viewTasks=()=>{
        console.log(todos.isView);
        dispatch(viewAllTasks());
    }
    
    return (
        <>
        <div className='container border border-dark bg-light'>
                <h2>Todo List App</h2><br />
                <AddForm/>

                <button className="btn btn-info my-3" onClick={viewTasks}>View All Tasks</button>
                {/*  Check if isView is true */}
                {isView  && 
                    (<ul>
                        <h2>All Tasks</h2>
                        {todos.map((todo) => (
                            <li key={todo.id} className='my-2'>
                                <span style={todo.isDone ? { textDecorationLine: "line-through", fontWeight: "normal" } : { fontWeight: 700 }}>{todo.task}</span>
                                <button onClick={() => clickHandler(todo.id)} className='btn btn-danger mx-4'>Delete</button>
                                <button onClick={() => doneClicked(todo.id)} className='btn btn-success mx-4'>Mark As Done</button>
                            </li>
                        ))}
                    </ul>)
                }
            </div>
        </>
    )
}