import { useState } from "react"

function LoggedIn() {

    const [isLoggeIn, setIsLoggedIn] = useState(false)

    const handleLogIn = () => {
        setIsLoggedIn(true)
    }
    const handleLogOut = () => {
        setIsLoggedIn(false)
    }
  return (
    <div>
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <h1>User is: {isLoggeIn ? 'logged in' : 'logged out'}</h1>
    </div>
  )
}

export default LoggedIn