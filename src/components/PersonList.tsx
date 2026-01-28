import type { Name } from "./Person.types"

type PersonListProps = {
    persons: Name[] // an array of object with properties
}

function PersonList({persons}: PersonListProps) {
  return (
    <div>
        {
            persons.map((p)=><div>{p.firstName} - {p.lastName}</div>)
        }
    </div>
  )
}

export default PersonList