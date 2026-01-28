
import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'

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
    </>
  )
}

export default App
