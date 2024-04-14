import { useState } from "react";

// 受控表单
const Controlled = () => {
  const [value, setValue] = useState("");

  //   const valueChange = (e) => {
  //     console.log(e, value);
  //   };
  return (
    <div>
      <span>受控表单</span>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {/* <input value={value} type="text" onChange={(e) => valueChange(e)}></input> */}
    </div>
  );
};

export default Controlled;
