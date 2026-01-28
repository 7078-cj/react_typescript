type GreetProps ={
    name:string
}
//you can add types in the props

function Greet({name}:GreetProps) {
  return (
    <div>
        <h2>Welcome {name} </h2>
    </div>
  )
}

export default Greet