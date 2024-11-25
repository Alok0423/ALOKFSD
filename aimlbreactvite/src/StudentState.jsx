import React,{useState} from 'react'

function StudentState() {

    const [count,setcount]=useState(15);

    const increment = ()=>{
        setcount((prev)=>prev+1);
    }

    const decrement = ()=>{
        setcount((prev)=>prev-1);
    }

    


  return (
    <>
    <div>Counter : {count}</div>
    <button onClick={increment}>Increase</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default StudentState