import { useEffect, useState } from "react";
import { Card } from "../card";
const textStyle = {fontSize: '120px', marginTop: '45%', marginLeft: '42.5%', 
                   fontFamily: 'Trebuchet MS', color: 'white',
                }


export function Counter() {
    const [count, setCount] = useState(5)
    const PCounter = <p style={textStyle}>{count}</p>


    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count > 0 ? count - 1 : null)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [count])

    return <div className="container my-3">
        {PCounter}
        {count == null && <Card />}
    </div>
}