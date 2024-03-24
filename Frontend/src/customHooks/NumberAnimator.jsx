import { useEffect, useState } from "react"

function NumberAnimator({start=0,end, duration=50, step=3}){
    const [initNumber, setNumber] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            if(initNumber >= end){
                setNumber(end)
                return clearInterval(interval)
            }
            setNumber((prev) => prev + step )
            
        }, duration);

        return ()=> clearInterval(interval)

    }, [initNumber])

    return initNumber
}


export default NumberAnimator