import { useEffect, useState } from "react";
import { fetchChannelAPI, type ChannelItem } from "@/apis/list";

function useTabs() {
  const [channels, setChanner] = useState<ChannelItem[]>([]);
  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await fetchChannelAPI();
        setChanner(res.data.data.channels);
      } catch (error) {
        throw new Error("fetch channel error");
      }
    };
    getChannels();
  }, []);

  return {
    channels,
  };
}

export { useTabs };
