import React,{useState} from 'react';
import { CounterContext } from './Context';
import ViewCounter from './ViewCounter';

function CountCounter(props) {
    var [item,setItem]=useState(0);
    const myDiv={
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
    }
    const myButton={
        margin:"2%",
    }

    const addItem=()=>{
        item=setItem(item+1);
    }

    const removeItem=()=>{
        item=setItem(item-1);
    }
    return (
        
            <CounterContext.Provider value={item}>
            <div style={myDiv}>
            <button style={myButton} onClick={removeItem}>Remove</button>
            <i>{item}</i>
            <button style={myButton} onClick={addItem}>Add</button>
            </div>
            <ViewCounter />
            
            </CounterContext.Provider>
    
    );
}

export default CountCounter;