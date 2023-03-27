import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TodoRow from './TodoRow';
import { UserContext } from './UserDataProvider';

function MyTodos(props) {

    const [user,setUser,API,todos] = useContext(UserContext)

    const todoList = todos?.map((todo,index)=>{
        return(
            <TodoRow
            key={`todoList`+todo.id}
            index={index+1}
            todo={todo}
            />
        )
    })



    if(todos.length>0){
        return(
            <div className='container mt-5 bg-body-tertiary'>
                <div className='container'>
                    <Link to='/project-form' className='mx-auto btn btn-outline-success'>Add New Project</Link>
                </div>
                <h2>Here are some of your todos</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Status</th>
                            {/* <th scope="col"></th>
                            <th scope="col"></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {todoList}
                    </tbody>
                </table>
            </div>
        )
    }
    else{
        return (
            <div>
                <div className="row justify-content-center mt-5">
                    <div className="card col-lg-4 col-sm-12 col-md-6">
                        <img src="https://img.icons8.com/color/96/null/nothing-found.png"
                            className="card-img-top" alt="nothing" style={{objectFit: "inherit"}}/>
                        <div className="card-body">
                            <p className="card-text">You have no todos created yet!</p>
                        </div>
                        <div className='container'>
                            <Link to='/project-form' className='mx-auto btn btn-outline-success'>Add New Todo</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyTodos;