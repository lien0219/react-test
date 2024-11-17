import { DetailDataType, fetchDetailAPI } from "@/apis/detail";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { NavBar } from "antd-mobile";

const Detail = () => {
  const [detail, setDetail] = useState<DetailDataType | null>(null);

  const [params] = useSearchParams();
  const id = params.get("id");
  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await fetchDetailAPI(id!);
        setDetail(res.data.data);
      } catch (error) {
        throw new Error("fetch detail error");
      }
    };
    getDetail();
  }, [id]);

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  //数据返回之前占位
  if (!detail) {
    return <div>this is loading...</div>;
  }
  //返回后正式渲染
  return (
    <div>
      <NavBar onBack={back}>{detail?.title}</NavBar>
      <div
        dangerouslySetInnerHTML={{
          __html: detail?.content,
        }}
      ></div>
    </div>
  );
};

export default Detail;
