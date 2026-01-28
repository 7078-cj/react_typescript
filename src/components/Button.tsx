type ButtonProps = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

function Button({handleClick}: ButtonProps) {
  return (
    <div><button onClick={event => handleClick(event, 1)}>CLick</button></div>
  )
}

export default Button