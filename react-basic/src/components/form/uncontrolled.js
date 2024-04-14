import { useRef } from "react";

// 非受控表单
const Uncontrolled = () => {
  const inputRef = useRef(null);
  const showDom = () => {
    console.dir(inputRef.current);
    console.log(inputRef.current);
  };
  return (
    <div>
      <span>非受控表单(useRef)</span>
      {/* 注意:渲染完毕之后dom生成完成之后才可以使用 */}
      <input type="text" ref={inputRef}></input>
      <button onClick={showDom}>获取dom</button>
    </div>
  );
};

export default Uncontrolled;
