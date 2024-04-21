function Son(props){
    console.log(props)
    return (
        <div style={{background:'green'}}>
            <span>son---{props.children}</span>
        </div>
    )
}

function Parent(){
    return (
        <div style={{background:'aqua',padding:'10px'}}>
            <h4>我是父组件</h4>
            <Son>
                <span>this is father</span>
            </Son>
        </div>
    )
}

export default  Parent