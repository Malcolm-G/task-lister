import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserDataProvider';

function TodoRow({todo,index}) {
    const [user,setUser,API,todos,setTodos] = useContext(UserContext)

    // let text = project.due;
    // const myArray = text.split("T");
    // let projectDue = myArray[0];

    // const isOwner = project.project_owner_id == user.id
    
    const [statusClass,setStatusClass] = useState('')
    const [priorityClass,setPriorityClass] = useState('')
    const [newStatus,setNewStatus] = useState(`${todo?.status}`)
    const [newPriority,setNewPriority] = useState(`${todo?.priority}`)
    // const [members,setMembers] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{


        switch(todo.status){
            case 'CREATED':
                setStatusClass("badge bg-info")
            break;
            case 'ONGOING':
                setStatusClass("badge bg-warning") 
            break;
            case 'CANCELLED':
                setStatusClass("badge bg-danger")
            break;
            case 'COMPLETED':
                setStatusClass("badge bg-success")
            break;
            default:
                setStatusClass("badge")
        }

        switch(todo.priority){
            case 'LOW':
                setPriorityClass("badge bg-success")
            break;
            case 'MEDIUM':
                setPriorityClass("badge bg-warning") 
            break;
            case 'HIGH':
                setPriorityClass("badge bg-danger")
            break;
            default:
                setPriorityClass("badge")
        }
    },[todo])

    function updateTodo(){
        navigate(`/update-todo-form/${todo.id}`)
    }

    function changeStatus(e){
        setNewStatus((newStatus)=>newStatus=e.target.value)
                const updatedTodos = todos?.map((item) => {
                    if (item.id == todo.id) {
                      return {
                        ...item,
                        status:e.target.value
                      };
                    } else {
                      return item;
                    }
                });
                setTodos(updatedTodos)
                window.alert("Status Updated")
    }

    function changePriority(e){
        setNewPriority((newPriority)=>newPriority=e.target.value)
                const updatedTodos = todos?.map((item) => {
                    if (item.id == todo.id) {
                      return {
                        ...item,
                        priority:e.target.value
                      };
                    } else {
                      return item;
                    }
                });
                setTodos(updatedTodos)
                window.alert("Priority Updated")
    }

    function deleteTodo(){
        const newTodos = todos?.filter((item) => item.id !== todo.id);
        setTodos(newTodos)
    }


    return (
        <tr className='align-middle'>
          <th scope="row">{index}</th>
          <td>{todo.title}</td>
          <td>{todo.description}</td>
          <td className=''>
            <select onChange={(e)=>{
                setNewPriority(e.target.value)
                changePriority(e)
            }}
            value={newPriority}
            className={`${priorityClass} border-0 text-dark`}
            name="status" id="priority-dropdown">
                <option value="LOW" >LOW</option>
                <option value="MEDIUM" >MEDIUM</option>
                <option value="HIGH" >HIGH</option>
            </select>
            {/* {todo.priority} */}
          </td>
          <td className=''>
            <select onChange={(e)=>{
                setNewStatus(e.target.value)
                changeStatus(e)
            }}
            value={newStatus}
            className={`${statusClass} border-0 text-dark`}
            name="status" id="status-dropdown">
                <option value="CREATED" >CREATED</option>
                <option value="ONGOING" >ONGOING</option>
                <option value="CANCELLED" >CANCELLED</option>
                <option value="COMPLETED" >COMPLETED</option>
            </select>
            {/* {todo.status} */}
          </td>
          <td>
            <button
            onClick={updateTodo}
            className='btn btn-warning btn-sm'
            disabled={1?false:true}  >Update</button>
          </td>
          <td>
            <button
            onClick={()=>{
                if(window.confirm('Are you sure you wish to delete this project?')){
                    deleteTodo()
                }
            }}
            className='btn btn-danger btn-sm'
            disabled={1?false:true} >Delete</button>
          </td>
        </tr>
    );
}

export default TodoRow;