import { create } from "zustand";
import { useEffect } from "react";

const URL = "http://geek.itheima.net/v1_0/channels";

//拆分子模块
const createCounterStore = (set) => {
  return {
    //状态数据
    count: 0,
    //修改状态数据的方法
    inc: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  };
};
const createChannelStore = (set) => {
  return {
    //异步使用
    channelList: [],
    fetchGetList: async () => {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      console.log(jsonRes);
      set({
        channelList: jsonRes.data.channels,
      });
    },
  };
};

//模块组合使用
const useStore = create((...a) => {
  return {
    ...createCounterStore(...a),
    ...createChannelStore(...a),
  };
});

export default function ZusAndSplice() {
  //组件使用
  const { count, inc, channelList, fetchGetList } = useStore();
  useEffect(() => {
    fetchGetList();
  }, [fetchGetList]);
  return (
    <>
      <button onClick={inc}>{count}</button>
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
