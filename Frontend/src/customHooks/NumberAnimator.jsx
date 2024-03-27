import { useEffect, useState } from "react"

function NumberAnimator({start=0,end, duration=50, step=3, once=true}){
    const [initNumber, setNumber] = useState(0)
    const [repeat, setRepeat] = useState(true)
    
    useEffect(() => {
        
        let interval;

        if(repeat){
            interval = setInterval(() => {

            if(initNumber >= end){
                 if(once){
                    setRepeat(false)
                 }
                setNumber(end)
                return clearInterval(interval)
            }
            setNumber((prev) => prev + start + step )
            
        }, duration);
        }


        return ()=> clearInterval(interval)

    }, [initNumber, repeat])


    return initNumber
}


export default NumberAnimator