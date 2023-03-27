import React, { createContext, useEffect, useState } from "react"

// create the context object
const UserContext = createContext()
const API = 'http://127.0.0.1:3000'

// create the context provider (component)
function UserDataProvider({ children }) {
    const [user, setUser] = useState({username:"Malcolm"})
    const [todos, setTodos] = useState([])


    const value = [user, setUser,API,todos,setTodos]
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

// export
export { UserContext, UserDataProvider }