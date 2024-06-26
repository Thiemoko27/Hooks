import { useEffect, useState } from "react";
import { Card } from "../card";
const textStyle = {fontSize: '90px', 
                   fontFamily: 'Trebuchet MS', color: 'white',
                }


export function Counter() {
    const [count, setCount] = useState(5)
    const PCounter = <p style={textStyle} className="text-center">{count}</p>


    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count > 0 ? count - 1 : null)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [count])

    return <div>
        {PCounter}
        {count == null && <Card />}
    </div>
}