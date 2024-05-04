// 使用configureStore组合子模块管理
import { configureStore } from "@reduxjs/toolkit";

// 子模块
import counterReducer from "./modules/counterStore";
import channelReducer from "./modules/channelStore";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
  },
});

export default store;
