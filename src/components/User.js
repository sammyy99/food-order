import { useState } from "react"

const User = (props)=>{

    const [count1 , setCount1] = useState(1)
    const [count2 , setCount2] = useState(2)
    const {name , location} = props

    const increment = () =>{
        setCount1(count1+1)
        setCount2(count2+1)
    }

    return(
        <div className="user-info">
            <h2>Count1 : {count1}</h2> <button onClick={increment}>Add 1</button>
            <h2>Count2 : {count2}</h2>
            <h1>Name: {name} </h1>
            <h2>Location: {location} </h2>
        </div>
    )
}

export default User