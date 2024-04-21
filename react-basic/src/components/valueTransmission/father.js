import Child from "./child";

function  Father(){
    const name='这是父组件数据'
    return(
        <div style={{background:'green',padding:'5px'}}>
            <h1>我是父组件</h1>
            <span>{name}</span>
            <div style={{background:'pink',margin:'5px'}}>
                <h4>我是子组件</h4>
                    <Child
                        name={name}
                        age={18}
                        isTrue={false}
                        list={['vue','react']}
                        obj={{name:'李四'}}
                        cb={()=>console.log(124567)}
                        child={<span>this is span</span>}
                    />
            </div>
        </div>
    )
}

export  default  Father