import { useEffect, useRef, useState } from "react"


function MutableRef() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | undefined>(undefined)

    const stopTimer = () => {
        window.clearInterval(intervalRef.current)
    }

    useEffect(()=>{
        intervalRef.current = window.setInterval(() =>{
            setTimer((timer)=> timer + 1)
        }, 1000)

        return () => {
            stopTimer()
        }
    },[])

  return (
    <div>
        HookTimer - {timer}
        <button onClick={()=> stopTimer()}>Stop Time</button>
    </div>
  )
}

export default MutableRef