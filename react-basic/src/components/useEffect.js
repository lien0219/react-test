import { useEffect, useState } from "react";

function Son() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("定时器执行中。。。");
    }, 1000);
    // return 清除副作用
    return () => {
      //   清除副作用
      clearInterval(timer);
    };
  }, []);
  return <div>this is son</div>;
}

function App() {
  // 条件渲染模拟组件卸载
  // const [show,setShow]=useState(true);
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //
  // }, []);

  return (
    <div>
      {show && <Son />}
      <button onClick={() => setShow(false)}>卸载son组件</button>
    </div>
  );
}

const URL = "http://geek.itheima.net/v1_0/channels";

function UseEffect() {
  const [list, setList] = useState([]);

  // 1.空数组，初始化执行一次
  // useEffect(()=>{
  //     async function getList(){
  //         const res =await fetch(URL)
  //         const list=await res.json()
  //         // console.log(list,'list')
  //         setList(list.data.channels)
  //     }
  //     getList()
  // },[]);

  // 2.没有依赖项，初始化+组件更新
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //     console.log('副作用函数执行了')
  // });

  // 2.传入特定依赖项，初始化+依赖项变化时执行
  useEffect(() => {
    console.log("副作用函数执行了");
  }, [count]);

  return (
    <div style={{ background: "greenyellow", padding: "10px" }}>
      {/*<ul>*/}
      {/*    {list.map(item=><li key={item.id}>{item.name}</li>)*/}
      {/*    }*/}
      {/*</ul>*/}
      <button onClick={() => setCount(count + 1)}>+{count}</button>
      <App />
    </div>
  );
}

export default UseEffect;
