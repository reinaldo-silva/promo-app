import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function useStorage(key: string) {
  const [data, setData] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);

  const setStore = async (value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async (): Promise<string | null> => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? jsonValue : null;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  useEffect(() => {
    getData()
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, []);

  return { setStore, getData, data, loading };
}
