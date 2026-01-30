import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

function User() {
    // const [user, setUser] = useState<AuthUser | null>(null)
    const [user, setUser] = useState<AuthUser >({} as AuthUser) // to avoid optional chaining
    const handleLogin = () => {
        setUser({
            name:"cj",
            email: 'email@email.com'
        })
    }
    // const handleLogout = () => {
    //     setUser(null)
    // }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <h1>Username is: {user.name}</h1>
        <h1>User email is: {user.email}</h1>
    </div>
  )
}

export default User