import { create } from "zustand";
import { useEffect } from "react";

const URL = "http://geek.itheima.net/v1_0/channels";

//创建store
const useStore = create((set) => {
  return {
    //状态数据
    count: 0,
    //修改状态数据的方法
    inc: () => {
      set((state) => ({ count: state.count + 1 }));
    },
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
});

export default function ZusAnd() {
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
