type GreetProps ={
    name:string
    messageCount: number
    isLoggedIn: boolean
}
//you can add types in the props

function Greet({name, messageCount, isLoggedIn}:GreetProps) {
  return (
    <div>
        {
            isLoggedIn && <h2>You are logged in</h2>
        }
        <h2>Welcome {name}: you have {messageCount} messages </h2>
    </div>
  )
}

export default Greet