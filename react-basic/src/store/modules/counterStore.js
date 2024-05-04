import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  // 初始化
  initialState: {
    count: 0,
  },
  //   修改状态方法  同步方法   支持直接修改
  reducers: {
    inscrement(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToNum(state, action) {
      state.count = action.payload;
    },
  },
});

// 解构出actionCreater函数
const { inscrement, decrement, addToNum } = counterStore.actions;
// 获取reducer
const reducer = counterStore.reducer;

// 按需导出actionCreater
export { inscrement, decrement, addToNum };
// 默认导出方式导出reducer
export default reducer;
