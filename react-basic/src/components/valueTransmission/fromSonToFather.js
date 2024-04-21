import {useState} from "react";

function Son({onGetMsg}){
    const sonMsg='这是子组件数据'

    return (
        <div style={{background:'green'}}>
            <span>son</span>
            <button onClick={()=>onGetMsg(sonMsg)}>发送</button>
        </div>
    )
}

function Fat(){
    const [msg,setMsg]=useState('')

    const getMsg=(msg)=>{
        console.log(msg,'msg')
        setMsg(msg)
    }
    return (
        <div style={{background:'aqua',padding:'10px'}}>
            <h4>我是父组件</h4>
            <span>子组件数据：{msg}</span>
            <Son onGetMsg={getMsg}/>
        </div>
    )
}

export default  Fat