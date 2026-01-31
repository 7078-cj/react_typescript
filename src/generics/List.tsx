type ListProps<T> = {
    items: T[]
    onClick:(value: T) => void
}
//React.ReactNode this represent anything that react can render
function List<T extends React.ReactNode>({items, onClick}: ListProps<T>) {
  return (
    <div>
        {
            items.map((item, index)=>{
                return(
                    <div key={index} onClick={()=>onClick(item)}>
                        {item}
                    </div>
                )
            })
        }
    </div>
  )
}

export default List