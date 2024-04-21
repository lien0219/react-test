import { useState, useEffect } from "react";
import axios from "axios";

function useGetList() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    // 请求数据
    async function getList() {
      const res = await axios.get("http://localhost:3004/list");
      setCommentList(res.data);
    }
    getList();
  }, []);

  return {
    commentList,
    setCommentList,
  };
}

export default useGetList;
