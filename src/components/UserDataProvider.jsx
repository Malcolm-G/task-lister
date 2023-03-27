import React, { createContext, useEffect, useState } from "react"

// create the context object
const UserContext = createContext()
const API = 'http://127.0.0.1:3000'

// create the context provider (component)
function UserDataProvider({ children }) {
    const [user, setUser] = useState(null)
    const [todos, setTodos] = useState([
        {
            id:0,
            title:"First Todo",
            description:'This is the first todo ever made',
            status:'CREATED',
            priority:'MEDIUM'
        },
        {
            id:1,
            title:"Second Todo",
            description:'This is the second todo ever made',
            status:'CREATED',
            priority:'LOW'
        },
        {
            id:2,
            title:"Third Todo",
            description:'This is the third todo ever made',
            status:'CREATED',
            priority:'HIGH'
        }
    ])

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
        //   console.log(foundUser)
          setUser(foundUser);
        }
    }, []);


    const value = [user, setUser,API,todos,setTodos]
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

// export
export { UserContext, UserDataProvider }