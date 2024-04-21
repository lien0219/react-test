import {useState} from "react";

function  A({onGetName}){
    const name='我是A组件数据'
    return (
        <div style={{background:"green"}}>
            this is A component
            <button onClick={()=>onGetName(name)}>send</button>
        </div>
    )
}

function  B({name}){
    return (
        <div style={{background:'pink',margin:'10px'}}>
            this is B component--{name}
        </div>
    )
}

function Zuapp(){

    const [name,setName]=useState('null')

    const getAName=(name)=>{
        console.log(name,'name')
        setName(name)
    }
    return(
        <div style={{background:"red",padding:"10px"}}>
            this is Zuapp
            <span>A组件数据：{name}</span>
            <A onGetName={getAName}/>
            <B name={name}/>
        </div>
    )
}

export  default Zuapp