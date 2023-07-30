import React,{useState, useEffect} from "react";
let Toggle=()=>{
    let [counter,setCounter]=useState(0)
    let increase=()=>{
        return setCounter(counter +=1)
    };
    let decrease =()=>{
        return setCounter(counter -=1)
    }

    useEffect( ()=>{
        console.log('UseEffect function')
    },[]);
    
    return<div>
        <button onClick={increase}>increase</button>
        < >{counter}</>
        <button onClick={decrease}>decrease</button>
    </div>
}
export default Toggle;