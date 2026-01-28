type PersonListProps = {
    persons: {
        firstName: string
        lastName: string
    }[] // an array of object with properties
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