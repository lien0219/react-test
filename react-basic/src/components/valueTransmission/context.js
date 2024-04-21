
// FaApp ->A ->B

// 1.createContext方法创建一个上下文对象
import {createContext, useContext} from "react";

const MsgContext=createContext()



function  A(){
    return(
        <div style={{background:'greenyellow'}}>
            this is A
            <B/>
        </div>
    )
}

function  B(){
    // 3.底层组件 通过useContext钩子函数使用数据
    const msg=useContext(MsgContext)
    return(
        <div style={{background:'green',margin:'10px'}}>
            this is B----{msg}
        </div>
    )
}

function FaApp(){
    const msg='我是app组件数据'
    return(
        <div style={{background:'red',padding:"10px"}}>
            {/*2.顶层组件，通过Provider组件提供数据*/}
           <MsgContext.Provider value={msg}>
               this is faapp
               <A/>
           </MsgContext.Provider>
        </div>
    )
}

export default FaApp