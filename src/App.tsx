
import './App.css'
import Child from './components/Child'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Parent from './components/Parent'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

function App() {
  const personName={
    firstName: "Ceejay",
    lastName: "Santos"
  }

  const nameList = [
    {
      firstName: "Ceejay",
      lastName: "Santos"
    },
    {
      firstName: "Jane",
      lastName: "Doe"
    },
    {
      firstName: "wak",
      lastName: "Santwahhhhhos"
    },
    
  ]

  return (
    <>
      <Greet name={"7078"} messageCount={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList persons={nameList}/>
      <Status status={'loading'}/>
      <Heading>wahhhh</Heading>
      <Parent child={<Child/>}/>
    </>
  )
}

export default App
