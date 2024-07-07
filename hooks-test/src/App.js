import { memo, useMemo, useReducer, useState } from "react";

// 1.useReducer
function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "SET":
      return action.payload;
    default:
      return state;
  }
}

// 2.useMemo
//斐波那契数列之和
function fib(n) {
  // console.log("计算函数执行了");
  if (n < 3) {
    return 1;
  }
  return fib(n - 2) + fib(n - 1);
}

// 3.React.memo(默认的渲染机制是子跟着父一起渲染),memo进行缓存，只有props发生变化的时候才会重新渲染，详细介绍访问个人主页csdn链接react专栏
const MemoSon = memo(function Son() {
  // console.log("子组件重新渲染");
  return <div>this is Son</div>;
});

// 4.React.memo  props比较机制(传递一个简单的prop,prop变化时组件重新渲染；传递引用类型的prop,比较的是最新值和旧值的引用是否相等)
const MemoSon2 = memo(function Son({ list }) {
  console.log("子组件重新渲染");
  return <div>this is Son2----------{list}</div>;
});

function App() {
  // 1.useReducer
  const [state, dispatch] = useReducer(reducer, 0);

  // 2.useMemo
  const [count1, setCount1] = useState(0);
  const result = useMemo(() => {
    return fib(count1);
  }, [count1]);
  // const result = fib(count1);
  const [count2, setCount2] = useState(0);
  // console.log("组件重新渲染了");

  // 3.React.memo
  const [count3, setCount3] = useState(0);

  // 4.React.memo  props比较机制
  const [count4, setCount4] = useState(0);
  // const num = 500;
  // const list = [1, 2, 3];
  const list = useMemo(() => {
    return [1, 2, 3];
  }, []);

  return (
    <div className="App">
      <h3>1.useReducer</h3>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      {state}
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      <button onClick={() => dispatch({ type: "SET", payload: 100 })}>
        update
      </button>
      <h3>2.useMemo</h3>
      <button onClick={() => setCount1(count1 + 1)}>
        change count1:{count1}
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        change count2:{count2}
      </button>
      {result}
      <h3>3.React.memo</h3>
      <button onClick={() => setCount3(count3 + 1)}>
        change count3:{count3}
      </button>
      <MemoSon></MemoSon>
      <h3>4.React.memo props比较机制</h3>
      <MemoSon2 list={list}></MemoSon2>
      <button onClick={() => setCount4(count4 + 1)}>
        change count4:{count4}
      </button>
    </div>
  );
}

export default App;
