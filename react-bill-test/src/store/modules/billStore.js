// 账单列表
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billList = createSlice({
  name: "bill",
  initialState: {
    billList: [],
  },
  reducers: {
    // 同步修改
    setBillList(state, action) {
      state.billList = action.payload;
    },
  },
});

const { setBillList } = billList.actions;

// 异步请求
const getBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:8080/ka");
    // 触发同步reducer
    dispatch(setBillList(res.data));
  };
};

export { getBillList };

const reducer = billList.reducer;

export default reducer;
