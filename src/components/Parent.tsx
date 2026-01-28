

type ParentProps = {
    child : React.ReactNode
}// you need to install @types/react

function Parent({child} : ParentProps) {
  return (
    <div><h1>Parent</h1>{child}</div>
  )
}

export default Parent