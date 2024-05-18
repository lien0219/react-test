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
    //添加账单
    addBill(state, action) {
      state.billList.push(action.payload);
    },
  },
});

const { setBillList, addBill } = billList.actions;

// 异步请求
const getBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:8080/ka");
    // 触发同步reducer
    dispatch(setBillList(res.data));
  };
};

const addBillList = (data) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:8080/ka", data);
    // 触发同步reducer
    dispatch(addBill(res.data));
  };
};

export { getBillList, addBillList };

const reducer = billList.reducer;

export default reducer;
