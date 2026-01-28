import type { PersonProps } from "./Person.types"


function Person({name}:PersonProps) {
  return (
    <div>{name.firstName} {name.lastName}</div>
  )
}

export default Person