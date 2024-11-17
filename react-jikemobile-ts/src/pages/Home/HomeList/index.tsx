import { Image, List, InfiniteScroll } from "antd-mobile";
import { users } from "./users";
import { useEffect, useState } from "react";
import { fetchListAPI, ListRes } from "@/apis/list";

type Props = {
  channelId: string;
};

const HomeList = (props: Props) => {
  const { channelId } = props;

  const [listRes, setListRes] = useState<ListRes>({
    result: [],
    pre_timestamp: "" + new Date().getTime(),
  });

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await fetchListAPI({
          channel_id: channelId,
          timestamp: "" + new Date().getTime(),
        });
        setListRes({
          result: res.data.data.result,
          pre_timestamp: res.data.data.pre_timestamp,
        });
      } catch (error) {
        throw new Error("fetch list error");
      }
    };
    getList();
  }, [channelId]);

  //标记是否还有新的数据
  const [hasMore, setHasMore] = useState(true);
  //加载下一页函数
  const loadMore = async () => {
    try {
      const res = await fetchListAPI({
        channel_id: channelId,
        timestamp: listRes.pre_timestamp,
      });
      setListRes({
        result: [...listRes.result, ...res.data.data.result],
        pre_timestamp: res.data.data.pre_timestamp,
      });
      //停止监听
      if (res.data.data.result.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      throw new Error("fetch list error");
    }
  };

  return (
    <>
      <List>
        {listRes.result.map((item) => (
          <List.Item
            key={item.art_id}
            prefix={
              <Image
                src={item.cover.images?.[0]}
                fit="cover"
                width={40}
                height={40}
                style={{ borderRadius: 20 }}
              />
            }
            description={item.pubdate}
          >
            {item.title}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </>
  );
};

export default HomeList;
