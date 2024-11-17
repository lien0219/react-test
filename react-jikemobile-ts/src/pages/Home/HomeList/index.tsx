import { Image, List } from "antd-mobile";
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
    </>
  );
};

export default HomeList;
