import { useState } from "react";

// 组件(也可以箭头函数)
function Component() {
  const [count, setCount] = useState(0);
  const [form, setForm] = useState({
    name: "里斯",
  });

  const handleClickSubtraction = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("已经归0，无法再减");
    }
  };
  const handleClickAddition = () => {
    if (count < 100) {
      setCount(count + 1);
    } else {
      alert("已经上限了");
    }
  };
  const handleChangeName = () => {
    if (form.name === "里斯") {
      setForm({
        ...form,
        name: "李四",
      });
    } else {
      setForm({
        ...form,
        name: "里斯",
      });
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "nowrap",
        }}
      >
        <button onClick={handleClickSubtraction}>减1</button>
        <span>count： {count}</span>
        <button onClick={handleClickAddition}>加1</button>
      </div>
      <div>
        <h3>修改对象状态</h3>
        <span>姓名：{form.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={handleChangeName} type="button">
          修改名字
        </button>
      </div>
    </div>
  );
}

function Test() {
  return (
    <div style={{ border: "1px solid red" }} className="test">
      {/* 自闭和 */}
      <Component />
    </div>
  );
}

export default Test;
