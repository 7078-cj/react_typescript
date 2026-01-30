import { useContext } from "react"
import { UserContext } from "./UserContext"


function User() {
    const userContext = useContext(UserContext)
    const handleLogIn = () => {
        if(userContext){
            userContext.setUser({
                name: 'ceejay',
                email: 'email.com'
            })
        }
    }
    const handleLogOut = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }
  return (
    <div>
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <h1>User name is: {userContext?.user?.name}</h1>
        <h1>User email is: {userContext?.user?.email}</h1>
    </div>
  )
}

export default User