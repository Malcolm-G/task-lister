import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from './UserDataProvider';

function UpdateTodoForm(props) {
    const params = useParams()
    const [user,setUser,API,todos,setTodos] = useContext(UserContext)

    let todoUpdating = todos?.find(element=>element.id==params.id)
    // let text = projectUpdating?.due;
    // const myArray = text.split("T");
    // let projectDue = myArray[0];
    
    const [title,setTitle] = useState(`${todoUpdating?.title}`)
    const [description,setDescription] = useState(`${todoUpdating?.description}`)
    // const [due,setDue] = useState(`${projectDue}`)
    const [due,setDue] = useState(``)
    const navigate = useNavigate()

    const input={title:title,description:description}

    useEffect(()=>{
        todoUpdating = todos?.find(element=>element.id==params.id)
    },[])

    function todoSubmit(e){
        e.preventDefault()
            const updatedTodos = todos?.map((item) => {
                if (item.id == params.id) {
                    return ({
                    ...item,
                    ...input
                    });
                } else {
                    return item;
                }
            });
            console.log(updatedTodos)
            // setProjects(updatedProjects)
            // console.log(projects)
            window.alert("Todo Updated")
            navigate("/my-todos");
    }

    function cancelClicked(){
        navigate("/my-todos");
    }

    return (
        <form className='log-form' onSubmit={(e)=>projectSubmit(e)} style={{border:"1px solid #ccc"}}>
            <div className="container bg-body-tertiary mt-5">
                <h1>Todo Details</h1>
                <p>Please fill in this form to update the todo.</p>
                <hr/>

                <label htmlFor="title"><b>Title</b></label>
                <input
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
                type="text" placeholder='Enter Todo Title' name="title" required/>

                <label htmlFor="description"><b>Description</b></label>
                <input
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
                type="text" placeholder="Enter Todo Description" name="description" required/>

                <label htmlFor="due"><b>Due Date</b></label>
                <input
                onChange={(e)=>setDue(e.target.value)}
                value={due}
                type="date" placeholder="Enter Due Date" name="due" required/>


                <div className="clearfix">
                <button type="submit" className=".log-signupbtn">Update Project</button>
                <button type="button" className=".log-cancelbtn bg-danger" onClick={cancelClicked} >Cancel</button>
                </div>
            </div>
        </form>
    );
}

export default UpdateTodoForm;